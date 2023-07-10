import { Spinner } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import { Icon, chevronRightSmall } from '@wordpress/icons'
import { useQuickLinks } from '@assist/hooks/useQuickLinks'

export const QuickLinks = () => {
    const { quickLinks, loading, error } = useQuickLinks()

    if (loading || error) {
        return (
            <div className="assist-quick-links-module w-full flex justify-center bg-white p-4 lg:p-8">
                <Spinner />
            </div>
        )
    }

    if (quickLinks.length === 0) {
        return (
            <div className="assist-quick-links-module w-full bg-white p-4 lg:p-8">
                {__('No quick links found...', 'extendify')}
            </div>
        )
    }

    return (
        <div
            id="assist-quick-links-module"
            className="w-full bg-white p-4 lg:p-8">
            <h3 className="text-lg leading-tight m-0">
                {__('Quick Links', 'extendify')}
            </h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 mt-4">
                {quickLinks.map((link) => (
                    <a
                        key={link.slug}
                        className="flex items-center no-underline hover:underline text-black hover:text-design-main text-sm"
                        href={
                            link.slug == 'view-site'
                                ? `${window.extAssistData.home}`
                                : `${window.extAssistData.adminUrl}${link.internalLink}`
                        }>
                        <span>{link.name}</span>
                        <Icon
                            icon={chevronRightSmall}
                            className="fill-current"
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}
