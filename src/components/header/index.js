import React from 'react';
import styles from './styles.module.css'
import { useSelector } from "react-redux"
import moment from 'moment'

const Header = () => {
    const event = useSelector(state => state.event)

    return (
        <div className={styles.header}>
            {console.log('Header')}
            <img className={styles.logo} alt='logo' src={`${event.image_link}/logo.png`} />
            <p className={styles.title}>{event.title}</p>
            <p className={styles.data}>{moment(event.date, 'MM/DD/YYYY').format('dddd, Do of MMMM YYYY').toUpperCase()}</p>
            <img className={styles.banner} alt='degree banner' src={`${event.image_link}/banner.png`} />
        </div>
    )
}

export default React.memo(Header)
