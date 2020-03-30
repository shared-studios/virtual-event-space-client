export default (state, { type, payload }) => {
  switch (type) {
    case "SOCKET-CONNECTION":
      return { ...state, socket: payload };
    case "ADD-ME":
      return { ...state, user: { ...state.user, ...payload } };
    case "ADD-USERS-ROOMS":
      return addUsersAndRooms(state, payload)
    case "UPDATE-USER":
      return updateUser(state, payload)
    case "DELETE-USER":
      return deleteUser(state, payload)
    case "AUTHENTICATED":
      return { ...state, user: { ...state.user, authenticated: payload } }
    default:
      return state
  }
}

const addUsersAndRooms = (state, payload) => {
  const rooms = state.rooms

  payload.rooms.forEach((room) => {
    let { topic, meeting_id, number_of_guests, room_id } = room
    rooms[room_id] = { room_id, topic, meeting_id, number_of_guests, users: {} }
  })

  payload.users.forEach((user) => {
    user.room_id = user.room_id || ['general']
    if (!rooms[user.room_id[0]]) {
      console.log('creating general room')
      rooms[user.room_id[0]] = {
        topic: 'general',
        users: {}
      }
    }
    const { id, first_name, last_name, socket_id, room_id, email, status } = user
    rooms[user.room_id[0]].users[user.id] = { id, first_name, last_name, socket_id, room_id, email, status }
  })
  return { ...state, rooms: { ...rooms } }
}

const updateUser = (state, payload) => {
  if (!payload.room_id) {
    payload.room_id = 'general'
  }
  state.rooms[payload.room_id].users[payload.id] = { ...payload }
  return { ...state, rooms: { ...state.rooms } }
}

const deleteUser = (state, payload) => {
  if (!payload.room_id) {
    payload.room_id = 'general'
  }
  delete state.rooms[payload.room_id].users[payload.id]
  return { ...state, rooms: { ...state.rooms } }
}