import React, { useState } from 'react'
import styles from './styles.module.css'

const Message = ({ msg, name }) => {
    const [clicked, setClicked] = useState(false)
    const { message, user_name, time_stamp } = msg

    return (
        <div className={name === user_name ? styles.message_me : styles.message} >
            {name !== user_name && <div className={styles.avatar}>{user_name.charAt(0).toUpperCase()}</div>}
            {clicked && <div className={styles.time_stamp}>{time_stamp}</div>}
            <div
                className={name === user_name ? styles.text_me : styles.text}
                onClick={() => setClicked(!clicked)}
            >
                {message}
                {console.log('message')}
            </div>
        </div >
    )
}

export default React.memo(Message)