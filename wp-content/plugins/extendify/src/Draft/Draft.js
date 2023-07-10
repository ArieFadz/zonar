import { Panel, PanelBody } from '@wordpress/components'
import { useEffect, useState } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { Actions } from '@draft/components/Actions'
import { Completion } from '@draft/components/Completion'
import { DraftMenu } from '@draft/components/DraftMenu'
import { EditMenu } from '@draft/components/EditMenu'
import { Input } from '@draft/components/Input'
import { InsertMenu } from '@draft/components/InsertMenu'
import { useCompletion } from '@draft/hooks/useCompletion'

export const Draft = () => {
    const [inputText, setInputText] = useState('')
    const [ready, setReady] = useState(false)
    const [prompt, setPrompt] = useState('')
    const { completion, loading, error } = useCompletion(prompt)

    // Reset input text when an error occurs
    useEffect(() => {
        if (error) {
            setInputText(prompt)
        }
    }, [error, prompt])

    return (
        <>
            <Panel>
                <PanelBody>
                    <div className="rounded-sm border-none bg-gray-100 overflow-hidden">
                        <Input
                            inputText={inputText}
                            setInputText={setInputText}
                            ready={ready}
                            setReady={setReady}
                            setPrompt={setPrompt}
                            loading={loading}
                        />
                        {completion && (
                            <>
                                <hr className="mx-5 my-0 border-gray-300" />
                                <Completion completion={completion} />
                            </>
                        )}
                        {(completion || error) && (
                            <div className="px-4 mb-4 mt-2 flex gap-4 items-center justify-end">
                                {error && (
                                    <p className="m-0 mr-auto text-xs font-semibold text-red-500 justify-self-start">
                                        {error.message}
                                    </p>
                                )}
                                <Actions
                                    loading={loading}
                                    error={error}
                                    prompt={prompt}
                                    setPrompt={setPrompt}
                                    setInputText={setInputText}
                                />
                            </div>
                        )}
                    </div>
                    {completion && !loading && !error && (
                        <InsertMenu
                            completion={completion}
                            setPrompt={setPrompt}
                        />
                    )}
                </PanelBody>
                {completion && (
                    <PanelBody title={__('Edit or review', 'extendify')}>
                        <EditMenu
                            completion={completion}
                            disabled={loading}
                            setInputText={setInputText}
                            setPrompt={setPrompt}
                        />
                    </PanelBody>
                )}
                <PanelBody title={__('Draft with AI', 'extendify')}>
                    <DraftMenu
                        disabled={loading}
                        setInputText={setInputText}
                        setReady={setReady}
                    />
                </PanelBody>
            </Panel>
            {window.extendifyData?.devbuild && (
                <Panel>
                    <PanelBody title="Debug" initialOpen={false}>
                        <label>prompt:</label>
                        <pre className="whitespace-pre-wrap">{prompt}</pre>
                        <label>completion:</label>
                        <pre className="whitespace-pre-wrap">{completion}</pre>
                        <label>error:</label>
                        <pre className="whitespace-pre-wrap">
                            {error?.message ?? ''}
                        </pre>
                        <label>
                            loading:{' '}
                            {loading ? <span>true</span> : <span>false</span>}
                        </label>
                    </PanelBody>
                </Panel>
            )}
        </>
    )
}
