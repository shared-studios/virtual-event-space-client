import { axios } from '../custom-module'

export const fetchAgenda = () => {
    return (dispatch) => {
        axios.get('agenda')
            .then((res) => {
                dispatch({ type: 'FETCH-AGENDAS_FULFILLED', payload: res })
                axios.get('current-agenda').then((res) => {
                    dispatch({ type: 'UPDATE-CURRENT-AGENDA', payload: res.data })
                })
            })
    }
}

export const updateCurrentAgenda = (time) => {
    return (dispatch) => {
        if (time) {
            axios.put(`current-agenda/${time}`)
                .then(() => {
                    dispatch({ type: 'UPDATE-CURRENT-AGENDA', payload: time })
                })
        }
    }
}

export const OnUpdateCurrentAgenda = (id) => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE-CURRENT-AGENDA', payload: id })
    }
}