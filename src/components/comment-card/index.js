import React from 'react'
import styles from './styles.module.css'
import Status from './status-svg'
import moment from 'moment'

const CommentCard = ({ time_stamp, first_name, last_name, comment, status, me }) => {
    return (
        <div className={styles.comment} >
            <div className={styles.time}>
                {moment(time_stamp).format('hh:mm A')}
                {me && <Status status={status} />}
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