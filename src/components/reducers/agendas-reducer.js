export default (state = [], { type, payload }) => {
    switch (type) {
        case "FETCH-AGENDAS_FULFILLED": {
            return payload.data
        }
        default: {
            return state
        }
    }
}