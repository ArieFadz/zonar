import { BlockControls } from '@wordpress/block-editor'
import { useSelect, useDispatch } from '@wordpress/data'
import { Toolbar } from '@draft/components/Toolbar'

const DraftBlockControls = (props) => {
    const { name, isSelected } = props

    const { sidebarName } = useSelect((select) => {
        return {
            sidebarName:
                select('core/interface').getActiveComplementaryArea(
                    'core/edit-post',
                ),
        }
    }, [])

    const { enableComplementaryArea, disableComplementaryArea } =
        useDispatch('core/interface')

    const toggleSidebar = () => {
        if (sidebarName === 'extendify-draft/draft') {
            disableComplementaryArea('core/edit-post')
        } else {
            enableComplementaryArea('core/edit-post', 'extendify-draft/draft')
        }
    }

    if (name !== 'core/paragraph' || !isSelected) {
        return null
    }

    return (
        <BlockControls>
            <Toolbar
                sidebarActive={sidebarName === 'extendify-draft/draft'}
                toggleSidebar={toggleSidebar}
            />
        </BlockControls>
    )
}

export default DraftBlockControls
