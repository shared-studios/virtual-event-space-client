export default (state = ["dsdfs": {}], { type, payload }) => {
    switch (type) {
        case "FETCH-AGENDAS_FULFILLED": {
            const agendas = payload.data.map((agenda, i) => {
                return { ...agenda, index: i }
            })
            console.log('FETCH-AGENDAS_FULFILLED:', agendas)
            return [...agendas]
        }
        case "FETCH-CURRENT-AGENDA_FULFILLED": {
            const time = payload.data
            if (time) {
                let foundCurrent = false
                const agendas = state.map((agenda) => {
                    if (agenda.time !== time && !foundCurrent) {
                        return { ...agenda, status: 'previous' }
                    }
                    if (agenda.time === time && !foundCurrent) {
                        foundCurrent = true
                        state.current_agenda = agenda
                        return { ...agenda, status: 'current' }
                    }
                    return { ...agenda, status: 'next' }
                })
                return [...agendas]
            } else {
                state.current_agenda = state[0]
                state[0] = { ...state[0], status: 'current' }
                return [...state]
            }
        }
        case "UPDATE-CURRENT-AGENDA": {
            if (payload) {
                let foundCurrent = false
                const agendas = state.map((agenda) => {
                    if (agenda.time !== payload && !foundCurrent) {
                        return { ...agenda, status: 'previous' }
                    }
                    if (agenda.time === payload && !foundCurrent) {
                        foundCurrent = true
                        return { ...agenda, status: 'current' }
                    }
                    return { ...agenda, status: 'next' }
                })
                return [...agendas]
            } else {
                state[0] = { ...state[0], status: 'current' }
                return [...state]
            }
        }
        default: {
            return state
        }
    }
}