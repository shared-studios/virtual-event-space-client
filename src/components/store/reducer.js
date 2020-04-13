export default (state, { type, payload }) => {
  switch (type) {
    case "AUTHENTICATED":
      return { ...state, user: { ...state.user, authenticated: payload } };
    case "SIGNED-IN":
      return { ...state, user: { ...state.user, ...payload, signed_in: true, authenticated: true } }
    case "AGENDAS":
      return { ...state, agendas: payload, current_agenda: payload[0] }
    case "CREATE-SOCKET-CONNECTION":
      return { ...state, socket: payload }
    case "NEW-MESSAGE":
      const { user, text, time_stamp } = payload
      state.messages.push({ user, text, time_stamp })
      return { ...state, messages: [...state.messages] }
    default:
      return state
  }
}