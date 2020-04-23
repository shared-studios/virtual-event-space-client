import React from 'react';
import styles from './styles.module.css'

const Agenda = (props) => {
    const { time, title, status, description } = props.agenda

    return (
        <div className={`${styles.agenda} ${styles[status]}`}>
            <p className={styles.time}>{time}</p>
            <p className={styles.title}>{title}</p>
            {(description && status === 'current') && <p className={styles.description}>{description}</p>}
        </div>
    )
}

export default React.memo(Agenda)
