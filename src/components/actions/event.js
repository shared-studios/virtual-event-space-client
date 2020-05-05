import { axios } from '../custom-module'

export const sendVideoReaction = (emoji) => {
    return (dispatch) => dispatch({ type: 'VIDEO-REACTION', payload: axios.post(`events/react/${emoji}`) })
}