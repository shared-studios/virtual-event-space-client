import React, { useState } from 'react'
import styles from './styles.module.css'

const Message = ({ message, name }) => {
    const [clicked, setClicked] = useState(false)
    const { text, user, time_stamp } = message

    return (
        <div className={name === user ? styles.message_me : styles.message} >
            {name !== user && <div className={styles.avatar}>{user.charAt(0).toUpperCase()}</div>}
            {clicked && <div className={styles.time_stamp}>{time_stamp}</div>}
            <div
                className={name === user ? styles.text_me : styles.text}
                onClick={() => setClicked(!clicked)}
            >
                {text}
                {console.log('message')}
            </div>
        </div >
    )
}

export default React.memo(Message)