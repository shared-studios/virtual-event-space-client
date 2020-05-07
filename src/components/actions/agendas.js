import { axios } from '../custom-module'

export const fetchAgendas = () => {
    return (dispatch) => {
        axios.get('agendas').then((res) => {
            dispatch({ type: 'FETCH-AGENDAS_FULFILLED', payload: res })
            const { current: agenda_id } = res.data
            axios.get(`agendas/${agenda_id}`).then((res) => {
                dispatch({ type: 'FETCH-AGENDA_FULFILLED', payload: res })
            }).catch((error) => dispatch({ type: 'ERROR', payload: error }))
        }).catch((error) => dispatch({ type: 'ERROR', payload: error }))
    }
}

export const fetchAgenda = (agenda_id) => {
    return (dispatch) => dispatch({ type: 'FETCH-AGENDA', payload: axios.get(`agendas/${agenda_id}`) })
}

export const sendVideoReaction = (agenda_id, emoji) => {
    return (dispatch) => dispatch({ type: 'VIDEO-REACTION', payload: axios.post(`agendas/react/${agenda_id}/${emoji}`) })
}