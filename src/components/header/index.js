import React from 'react'
import { Link } from "react-router-dom";
import styles from './styles.module.css'

const Header = () => {
    return <div className={styles.header}>
        <div className={styles.logo}>CONFERENCE 2020</div>
        <Link className={styles.link} to='/programs'>PROGRAM</Link>
        <Link className={styles.link} to='/KeynoteSpeakers'>KEYNOTE SPEAKERS</Link>
        <Link className={styles.link} to='/BreakoutSessions'>BREAKOUT SESSIONS</Link>
        <Link className={styles.link} to='/register'>REGISTER</Link>
    </div>
}

export default Header