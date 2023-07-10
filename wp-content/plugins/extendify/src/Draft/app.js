import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post'
import { addFilter } from '@wordpress/hooks'
import { __ } from '@wordpress/i18n'
import { registerPlugin } from '@wordpress/plugins'
import { Draft } from '@draft/Draft'
import DraftBlockControls from '@draft/DraftBlockControls'
import { magic } from '@draft/svg'
import './app.css'

registerPlugin('extendify-draft', {
    render: () => (
        <>
            <PluginSidebarMoreMenuItem target="draft">
                {__('Draft', 'extendify')}
            </PluginSidebarMoreMenuItem>
            <PluginSidebar
                name="draft"
                icon={magic}
                title={__('AI Tools', 'extendify')}
                className="extendify-draft">
                <Draft />
            </PluginSidebar>
        </>
    ),
})

addFilter('editor.BlockEdit', 'extendify/draft', (BlockEdit) => {
    const DraftBlockEdit = (props) => {
        return (
            <>
                <BlockEdit {...props} />
                <DraftBlockControls {...props} />
            </>
        )
    }

    DraftBlockEdit.displayName = 'DraftToolbar'

    return DraftBlockEdit
})
