
if (!localStorage.getItem('graduate')) localStorage.setItem('graduate', JSON.stringify({}))

export default (state = {}, { type, payload }) => {
    switch (type) {
        case 'EMPTY-GRADUATE': {
            return {}
        }
        case "FETCH-GRADUATE_FULFILLED": {
            const newState = {}
            const localGraduatesObj = JSON.parse(localStorage.getItem('graduate'))
            let graduates = Object.values(localGraduatesObj)
            const { id } = payload.data
            graduates.slice(0, id).forEach((graduate) => newState[graduate.id] = graduate)
            newState[id] = payload.data
            localGraduatesObj[id] = payload.data
            localStorage.setItem('graduate', JSON.stringify(localGraduatesObj))
            return { ...newState }
        }
        case "GRADUATE-REACTION_FULFILLED": {
            const { graduate_id: id, type } = payload.data
            if (state[id]) {
                if (!state[id][type]) {
                    state[id][type] = { clicked: true, count: 0 }
                }
                state[id][type].clicked = true
                state[id][type].count++
                return { ...state, [id]: { ...state[id] } }
            }
            return { ...state }
        }
        case 'UPDATE-GRADUATE-REACTION': {
            const { graduate_id: id, type } = payload
            if (state[id]) {
                if (!state[id][type]) {
                    state[id][type] = { clicked: false, count: 0 }
                }
                state[id][type].count++
                return { ...state, [id]: { ...state[id] } }
            }
            return { ...state }
        }
        default: {
            return state
        }
    }
}