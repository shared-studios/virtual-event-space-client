import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import styles from './landing-page.module.css'

const LandingPage = () => {
    const socket = useSelector(state => state.socket)
    const rooms = useSelector(state => state.rooms)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const joinMeeting = (room, sit) => {
        const { room_id, id, status } = user
        socket.emit('join-meeting', room.room_id, { room_id, id, status }, (res) => {
            if (res.ok) {
                console.log('join-meeting')
                dispatch({ type: "ADD-ME", payload: res.data })
                window.open(`https://sharedstudios.zoom.us/j/${room.meeting_id}`, "_blank")
            } else {
                console.log(res.error)
            }
        })
    }

    const getSits = (room) => {
        const sits = [<div className={styles.table} />]
        for (let i = 0; i < room.number_of_guests; i++) {
            sits.push(
                <div
                    className={styles.sit}
                    style={{ gridArea: `sit_${i}` }}
                    onClick={() => joinMeeting(room, i)}
                />
            )
        }
        return sits
    }

    return (
        <React.Fragment>
            {console.log('LandingPage:', rooms)}
            <div>name: {user.first_name} {user.last_name}</div>
            <div>Current Room: {user.topic || 'general'}</div>
            <br />
            <div className={styles.rooms}>
                {Object.values(rooms).map((room) => {
                    return <div
                        key={room.room_id}
                        className={`${styles.room} ${styles['room_with_sit_' + room.number_of_guests]}`}
                    >
                        <div className={styles.room_name}>{room.topic}</div>
                        {room.topic === 'general' ? Object.values(room.users).map((user) => {
                            return <div
                                key={user.socket_id}
                                className={styles.users}
                            >
                                <p>{user.first_name} {user.last_name} <b>{user.status}</b></p>
                            </div>
                        }) : getSits(room)}
                    </div>
                })}
                {/* <iframe title="test" allow="microphone; camera" className={styles.iframe} src="https://zoom.us/wc/join/334686712" frameborder="0"></iframe> */}
            </div>
        </React.Fragment>
    )
}

export default React.memo(LandingPage)


