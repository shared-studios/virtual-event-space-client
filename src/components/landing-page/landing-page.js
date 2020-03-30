import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import styles from './landing-page.module.css'

const LandingPage = () => {
    const socket = useSelector(state => state.socket)
    const rooms = useSelector(state => state.rooms)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const joinMeeting = (room) => {
        const { room_id, id, status } = user
        socket.emit('join-meeting', room.room_id, { room_id, id, status }, (res) => {
            if (res.ok) {
                console.log('join-meeting')
                dispatch({ type: "ADD-ME", payload: res.data })
                window.open(`https://zoom.us/wc/join/${room.meeting_id}`, "_blank")
            } else {
                console.log(res.error)
            }
        })
    }

    return (
        <React.Fragment>
            {console.log('LandingPage:', rooms)}
            <div>name: {user.first_name} {user.last_name}</div>
            <div>Current Room: {user.topic || 'general'}</div>
            <br />
            {Object.values(rooms).map((room) => {
                return <ul
                    key={room.room_id}
                    className={styles.rooms}
                    onClick={() => joinMeeting(room)}
                >
                    {room.topic} {room.number_of_guests} {
                        Object.values(room.users).map((user) => {
                            return <li
                                key={user.socket_id}
                                className={styles.users}
                            >
                                <p>{user.first_name} {user.last_name} <b>{user.status}</b></p>
                            </li>
                        })}
                </ul>
            })}
            {/* <iframe title="test" allow="microphone; camera" className={styles.iframe} src="https://zoom.us/wc/join/334686712" frameborder="0"></iframe> */}
        </React.Fragment>
    )
}

export default React.memo(LandingPage)