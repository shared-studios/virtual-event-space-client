import React from 'react';
import styles from './styles.module.css'

const LiveVideo = () => {

    return (
        <video className={styles.live_video} src='' />
    )
}

export default React.memo(LiveVideo)
