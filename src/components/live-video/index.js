import React from 'react';
import styles from './styles.module.css'

const LiveVideo = () => {

    return (
        <div className={styles.container}>
            <video className={styles.live_video} />
            <iframe
                className={styles.video_iframe}
                title='video'
                src="https://player.vimeo.com/video/413327936"
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
            />
        </div>

    )
}

export default React.memo(LiveVideo)
