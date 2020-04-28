import React from 'react'
import styles from './styles.module.css'
import ApprovedSVG from './approved-svg'
import PendingSVG from './pending-svg'

const Message = ({ msg }) => {
    const { message, user_name, approved, user_id } = msg

    return (
        <div className={styles.message} >
            <div className={styles.avatar}>{user_name.charAt(0).toUpperCase()}</div>
            <div className={styles.text}>{message}</div>
            <div className={styles.user_name}>{user_name} {window.config.id === user_id && (approved ? <ApprovedSVG /> : <PendingSVG />)}</div>
            {console.log('message')}
        </div >
    )
}

export default React.memo(Message)