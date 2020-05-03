import { axios } from '../custom-module'

export const fetchAgendas = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH-AGENDAS', payload: axios.get('agendas') })
    }
}