import React from 'react';
import styles from './styles.module.css'
import { useSpring, animated } from 'react-spring'

const Agenda = ({ agenda }) => {
    const { time, title, status, description } = agenda
    const props = useSpring({ opacity: status === 'current' ? 1 : 0 })

    return <div className={`${styles.agenda} ${styles[status]}`}>
        <p className={styles.time}>{time}</p>
        <p className={styles.title}>{title}</p>
        {(description && status === 'current') &&
            <animated.div style={props} className={styles.description}>
                {description}
            </animated.div>
        }
    </div>
}
export default React.memo(Agenda)
