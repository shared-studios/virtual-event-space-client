import React from 'react';
import styles from './styles.module.css'

const LiveVideo = () => {

    return (
        <div className={styles.container}>
            <video className={styles.live_video} />
            {/* <iframe
                className={styles.video_iframe}
                title='video'
                src="//iframe.dacast.com/b/160241/c/533670"
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
            /> */}
            {/* <iframe src="//iframe.dacast.com/b/160241/c/533670" width="590" height="431" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe> */}
        </div>

    )
}

export default React.memo(LiveVideo)
