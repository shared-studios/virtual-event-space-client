import { axios } from '../custom-module'

export const fetchAgenda = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH-AGENDAS', payload: axios.get('agenda') })
    }
}

export const updateCurrentAgenda = (id) => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE-CURRENT-AGENDA', payload: id })
    }
}

export const fetchCurrentAgenda = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH-CURRENT-AGENDA', payload: axios.get('current-agenda') })
    }
}