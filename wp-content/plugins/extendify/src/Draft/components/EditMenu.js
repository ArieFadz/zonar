import { MenuGroup, MenuItem } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import { Icon } from '@wordpress/icons'
import { wand, check, shorter, longer, magic } from '@draft/svg'

export const EditMenu = ({ disabled, completion, setInputText, setPrompt }) => {
    const handleClick = (prompt) => {
        setInputText('')
        setPrompt(prompt + '\n\n' + completion)
    }

    return (
        <MenuGroup>
            <MenuItem
                onClick={() => handleClick('Improve the writing of this text:')}
                disabled={disabled}>
                <Icon
                    icon={wand}
                    className="text-design-main fill-current w-5 h-5 mr-2"
                />
                {__('Improve writing', 'extendify')}
            </MenuItem>
            <MenuItem
                onClick={() =>
                    handleClick('Fix the spelling and grammar of this text:')
                }
                disabled={disabled}>
                <Icon
                    icon={check}
                    className="text-design-main fill-current w-5 h-5 mr-2"
                />
                {__('Fix spelling & grammar', 'extendify')}
            </MenuItem>
            <MenuItem
                onClick={() => handleClick('Make this text shorter:')}
                disabled={disabled}>
                <Icon
                    icon={shorter}
                    className="text-design-main fill-current w-5 h-5 mr-2"
                />
                {__('Make shorter', 'extendify')}
            </MenuItem>
            <MenuItem
                onClick={() => handleClick('Make this text longer:')}
                disabled={disabled}>
                <Icon
                    icon={longer}
                    className="text-design-main fill-current w-5 h-5 mr-2"
                />
                {__('Make longer', 'extendify')}
            </MenuItem>
            <MenuItem
                onClick={() =>
                    handleClick('Simplify the language of this text:')
                }
                disabled={disabled}>
                <Icon
                    icon={magic}
                    className="text-design-main fill-current w-5 h-5 mr-2"
                />
                {__('Simplify language', 'extendify')}
            </MenuItem>
        </MenuGroup>
    )
}
