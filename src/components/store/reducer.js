export default (state, { type, payload }) => {
  switch (type) {
    case "SOCKET-CONNECTION":
      return { ...state, socket: payload };
    case "AUTHENTICATED":
      return { ...state, user: { ...state.user, authenticated: payload } };
    default:
      return state;
  }
};
