import React from 'react';
import styles from './styles.module.css'
import { useSelector } from 'react-redux'
import moment from 'moment'

const CurrentAgenda = () => {
    const { time, title, description } = useSelector(state => state.current_agenda)
    return (
        <div className={styles.current_agenda}>
            <p className={styles.time_title}>{moment(time).format('h:mmA')}_{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default React.memo(CurrentAgenda)