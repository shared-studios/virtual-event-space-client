const currentAgenda = { time_stamp: '', title: '', description: '' }
export default (state = currentAgenda, { type, payload }) => {
    switch (type) {
        case "SET-CURRENT-AGENDAS": {
            return payload
        }
        default: {
            return state
        }
    }
}