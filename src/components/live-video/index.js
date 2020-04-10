import React from 'react';
import styles from './styles.module.css'
import CurrentAgenda from '../current-agenda'

const LiveVideo = () => {
    return (
        <div className={styles.live_video}>
            <video className={styles.video} src=''></video>
            <CurrentAgenda />
        </div>
    )
}

export default React.memo(LiveVideo)
