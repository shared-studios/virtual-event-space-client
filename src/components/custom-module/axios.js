import axios from 'axios'


const catchError = (error) => {
    console.log(error.response)
    console.log(window.config)
}

const axiosConfig = (config) => {
    if (window.config.token) {
        config = {
            ...config, headers: {
                ...config?.headers,
                authorization: window.config.token
            }
        }
    }
    return config
}

export default {
    get: (path, config) => {
        return axios.get(`${window.config.api_url}/${path}`, axiosConfig(config)).catch(catchError)
    },
    post: (path, data, config) => {
        config = axiosConfig(config)
        return axios.post(`${window.config.api_url}/${path}`, data, axiosConfig(config)).catch(catchError)
    },
    patch: (path, data, config) => {
        config = axiosConfig(config)
        return axios.patch(`${window.config.api_url}/${path}`, data, axiosConfig(config)).catch(catchError)
    },
    delete: (path, config) => {
        config = axiosConfig(config)
        return axios.delete(`${window.config.api_url}/${path}`, axiosConfig(config)).catch(catchError)
    }
}