import React from 'react'
import styles from './styles.module.css'

const Message = ({ msg }) => {
    const { message, user_name } = msg

    return (
        <div className={styles.message} >
            <div className={styles.avatar}>{user_name.charAt(0).toUpperCase()}</div>
            <div className={styles.text}>
                {message}
            </div>
            <div className={styles.user_name}>{user_name}</div>
            {console.log('message')}
        </div >
    )
}

export default React.memo(Message)