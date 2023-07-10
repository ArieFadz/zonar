import { ToolbarButton, ToolbarGroup } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import { magic } from '@draft/svg'

export const Toolbar = ({ sidebarActive, toggleSidebar }) => {
    return (
        <ToolbarGroup>
            <ToolbarButton
                icon={magic}
                label={__('Ask AI', 'extendify')}
                style={{ padding: '0 8px' }}
                onClick={toggleSidebar}
                isPressed={sidebarActive}>
                {__('Ask AI', 'extendify')}
            </ToolbarButton>
        </ToolbarGroup>
    )
}
