import { createBlock, pasteHandler } from '@wordpress/blocks'
import { MenuGroup, MenuItem } from '@wordpress/components'
import { useDispatch, useSelect } from '@wordpress/data'
import { __ } from '@wordpress/i18n'
import { Icon } from '@wordpress/icons'
import { replace, below } from '@draft/svg'

export const InsertMenu = ({ completion, setPrompt }) => {
    const { insertBlocks, replaceBlocks } = useDispatch('core/block-editor')
    const selectedBlock = useSelect(
        (select) => select('core/block-editor').getSelectedBlock(),
        [],
    )
    const blockOrder = useSelect(
        (select) => select('core/block-editor').getBlockOrder(),
        [],
    )
    const { getBlockRootClientId, getBlockIndex, getBlock } = useSelect(
        (select) => select('core/block-editor'),
        [],
    )

    const insertBelow = (targetBlock, replace = false) => {
        const parentBlockId = getBlockRootClientId(targetBlock.clientId)
        const blockIndex = getBlockIndex(targetBlock.clientId, parentBlockId)

        let blocks = pasteHandler({ plainText: completion })
        if (!Array.isArray(blocks)) {
            blocks = [
                createBlock('core/paragraph', {
                    content: blocks,
                }),
            ]
        }

        if (replace || targetBlock.attributes?.content === '') {
            replaceBlocks(targetBlock.clientId, blocks)
        } else {
            insertBlocks(blocks, blockIndex + 1, parentBlockId)
        }
    }

    return (
        <MenuGroup className="mt-4">
            <MenuItem
                onClick={() => {
                    setPrompt('')
                    insertBelow(selectedBlock, true)
                }}
                disabled={!selectedBlock}>
                <Icon icon={replace} className="fill-current w-5 h-5 mr-2" />
                {__('Replace selected block text', 'extendify')}
            </MenuItem>
            <MenuItem
                onClick={() => {
                    setPrompt('')
                    insertBelow(
                        selectedBlock
                            ? selectedBlock
                            : getBlock(blockOrder[blockOrder.length - 1]),
                        false,
                    )
                }}>
                <Icon icon={below} className="fill-current w-5 h-5 mr-2" />
                {__('Insert below', 'extendify')}
            </MenuItem>
        </MenuGroup>
    )
}
