export default (state = [], { type, payload }) => {
    switch (type) {
        case "FETCH-AGENDAS_FULFILLED": {
            console.log(payload.data)
            const agendas = payload.data.map((agenda, i) => {
                return { ...agenda, index: i }
            })
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
                        return { ...agenda, status: 'current' }
                    }
                    return { ...agenda, status: 'next' }
                })
                return [...agendas]
            }
            return state
        }
        case "UPDATE-CURRENT-AGENDA": {
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
        }
        default: {
            return state
        }
    }
}