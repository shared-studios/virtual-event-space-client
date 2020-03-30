export default (state, { type, payload }) => {
  switch (type) {
    case "TYPE":
      return { ...state };
    default:
      return state
  }
}