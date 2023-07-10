import { Button } from '@wordpress/components'
import { useState } from '@wordpress/element'
import { __ } from '@wordpress/i18n'

export const Actions = ({ loading, prompt, setPrompt, setInputText }) => {
    const [prevPrompt, setPrevPrompt] = useState('')

    const cancel = () => {
        setPrevPrompt(prompt)
        setPrompt('')
    }

    const retry = () => {
        const retryPrompt = prompt.length > 0 ? prompt : prevPrompt
        setInputText('')
        setPrompt('')
        setTimeout(() => setPrompt(retryPrompt))
    }

    return (
        <>
            {loading && (
                <Button
                    onClick={cancel}
                    className="rounded-sm bg-gray-300 h-auto flex gap-2 text-xs px-2 py-1.5 text-gray-700 font-semibold">
                    {__('Stop', 'extendify')}
                </Button>
            )}
            {!loading && (
                <Button
                    onClick={retry}
                    className="rounded-sm bg-gray-300 h-auto flex gap-2 text-xs px-2 py-1.5 text-gray-700 font-semibold">
                    {__('Retry', 'extendify')}
                </Button>
            )}
        </>
    )
}
