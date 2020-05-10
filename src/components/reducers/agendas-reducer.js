export default (state = { current: '0', agendas: [] }, { type, payload }) => {
    switch (type) {
        case "FETCH-AGENDAS_FULFILLED": {
            return payload.data
        }
        case "FETCH-AGENDA_FULFILLED": {
            const { id: agenda_id } = payload.data
            let foundCurrent = false

            state.agendas = state.agendas.map((agenda) => {
                if (agenda.id !== agenda_id && !foundCurrent) {
                    return { ...agenda, status: 'previous' }
                }
                if (agenda.id === agenda_id && !foundCurrent) {
                    foundCurrent = true
                    return { ...payload.data, status: 'current' }
                }
                return { ...agenda, status: 'next' }
            })
            return { ...state, current: agenda_id }
        }
        case 'UPDATE-VIDEO-REACTION': {
            const { agenda_id, type } = payload
            state.agendas = state.agendas.map((agenda) => {
                if (agenda.id === agenda_id) {
                    if (!agenda[type]) agenda[type] = { clicked: false, count: 0 }
                    agenda[type].count++
                    return { ...agenda }
                }
                return agenda
            })
            return { ...state }
        }
        case 'VIDEO-REACTION_FULFILLED': {
            const { agenda_id, type } = payload.data
            state.agendas = state.agendas.map((agenda) => {
                if (agenda.id === agenda_id) {
                    if (!agenda[type]) agenda[type] = { clicked: true, count: 0 }
                    agenda[type].clicked = true
                    agenda[type].count++
                    return { ...agenda }
                }
                return agenda
            })
            return { ...state }
        }
        default: {
            return state
        }
    }
}