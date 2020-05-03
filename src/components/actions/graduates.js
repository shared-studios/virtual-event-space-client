import { axios } from '../custom-module'

export const fetchGraduate = (id) => {
    return (dispatch) => {
        console.log('id:', id)
        // dispatch({ type: 'FETCH-GRADUATE_FULFILLED', payload: axios.get(`graduates/${id}`) })
        dispatch({
            type: 'FETCH-GRADUATE_FULFILLED', payload: {
                data: {
                    index: id,
                    first_name: "F_NAME_" + id,
                    last_name: "L_NAME_" + id,
                    degree: "M.S in Biomedical Technology",
                    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }
            }
        })
    }
}

export const sendReaction = (student_id, emoji) => {
    return (dispatch) => {
        dispatch({ type: 'GRADUATE-REACTION', payload: axios.patch(`graduates/react/${student_id}/${emoji}`) })
    }
}


