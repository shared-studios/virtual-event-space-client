import React from 'react'
import styles from './styles.module.css'
import ApprovedSVG from './approved-svg'
import PendingSVG from './pending-svg'
import moment from 'moment'

const Message = ({ msg }) => {
    const { time_stamp, user_id, first_name, last_name, comment, approved } = msg

    return (
        <div className={styles.message} >
            <p className={styles.time}>{moment(time_stamp).format('hh:mm A')} {window.config.id === user_id && (approved ? <ApprovedSVG /> : <PendingSVG />)}</p>
            <p className={styles.text}><span className={styles.user_name}>{first_name} {last_name.charAt(0)}.: </span>{comment}</p>
            {console.log('message')}
        </div >
    )
}

export default React.memo(Message)