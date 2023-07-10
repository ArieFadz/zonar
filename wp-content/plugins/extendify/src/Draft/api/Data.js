export const completion = async (prompt) => {
    const response = await fetch(`${window.extDraftData.root}/completion`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Extendify-Draft': true,
            'X-Extendify': true,
        },
        body: JSON.stringify({ prompt }),
    })

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response
}
