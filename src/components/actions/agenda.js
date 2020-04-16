import { axios } from '../custom-module'

export const fetchAgenda = () => {
    return (dispatch) => {
        axios.get('agenda')
            .then((res) => {
                dispatch({ type: 'FETCH-AGENDAS_FULFILLED', payload: res })
                dispatch({ type: 'FETCH-CURRENT-AGENDA', payload: axios.get('current-agenda') })
            })
    }
}

export const updateCurrentAgenda = (id) => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE-CURRENT-AGENDA', payload: id })
    }
}