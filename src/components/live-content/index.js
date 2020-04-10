import React from 'react';
import styles from './styles.module.css'

const LiveContent = () => {
    return (
        <div className={styles.live_content}>LiveContent</div>
    )
}

export default React.memo(LiveContent)
