import axios from 'axios'

const Axios = axios.create({
    baseURL: window.extDraftData.root,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-Extendify-Draft': true,
        'X-Extendify': true,
    },
})

export { Axios }
