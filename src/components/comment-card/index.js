import React from 'react'
import styles from './styles.module.css'
import ApprovedSVG from './approved-svg'
import PendingSVG from './pending-svg'
import moment from 'moment'

const CommentCard = ({ time_stamp, user_id, first_name, last_name, comment, approved }) => {
    return (
        <div className={styles.comment} >
            <div className={styles.time}>
                {moment(time_stamp).format('hh:mm A')} {window.config.id === user_id && (approved ? <ApprovedSVG /> : <PendingSVG />)}
            </div>
            <p className={styles.text}>
                <span className={styles.user_name}>{first_name} {last_name.charAt(0)}.: </span>
                {comment}
            </p>
            {console.log('CommentCard')}
        </div >
    )
}

export default React.memo(CommentCard)