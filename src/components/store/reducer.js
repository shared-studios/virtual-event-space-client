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
  let rooms = state.rooms

  payload.rooms.forEach((room) => {
    let { topic, meeting_id, number_of_guests, room_id } = room
    rooms[room_id] = { room_id, topic, meeting_id, number_of_guests, sits: {} }
    for (let i = 0; i < number_of_guests; i++) {
      rooms[room_id].sits[i + 1] = { occupied: false }
    }
  })

  payload.users.forEach((user) => {
    let room = rooms[user.room_id || 'general']
    if (!rooms[room]) {
      console.log('creating general room')
      room = {
        topic: 'general',
        users: {}
      }
    }

    if (room.topic === 'general') {
      room.users[user.id] = { ...user }
    } else {
      room.sits[user.sit] = { ...user, occupied: true }
    }
    rooms[room] = room
  })
  return { ...state, rooms: { ...rooms } }
}

const updateUser = (state, payload) => {
  // if (!payload.room_id) {
  //   payload.room_id = 'general'
  // }
  // state.rooms[payload.room_id].users[payload.id] = { ...payload }
  return { ...state, rooms: { ...state.rooms } }
}

const deleteUser = (state, payload) => {
  // if (!payload.room_id) {
  //   payload.room_id = 'general'
  // }
  // delete state.rooms[payload.room_id].users[payload.id]
  return { ...state, rooms: { ...state.rooms } }
}

