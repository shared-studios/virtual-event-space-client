import React from 'react';
import styles from './styles.module.css'
import moment from 'moment'

const Agenda = ({ time, title }) => {
    return (
        <div className={styles.agenda}>
            <p className={styles.time}>{moment(time).format('h:mm a')}</p>
            <p className={styles.text}>{title}</p>
        </div>
    )
}

export default React.memo(Agenda)
