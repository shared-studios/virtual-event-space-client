import React from 'react';
import styles from './styles.module.css'
import moment from 'moment'

const CurrentAgenda = ({ agenda: { time, title, description } }) => {
    return (
        <div className={styles.current_agenda}>
            {console.log('CurrentAgenda')}
            <p className={styles.time_title}>{moment(time).format('h:mmA')}_{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default React.memo(CurrentAgenda)