export default (state, { type, payload }) => {
  switch (type) {
    case "AUTHENTICATED":
      return { ...state, user: { ...state.user, authenticated: payload } };
    case "SIGNED-IN":
      return { ...state, user: { ...state.user, ...payload, signed_in: true, authenticated: true } }
    case "AGENDAS":
      return { ...state, agendas: payload, current_agenda: payload[0] }
    default:
      return state
  }
}