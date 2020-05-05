import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css'
import Vimeo from '@vimeo/player'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGraduate } from '../actions/graduates'
import { sendVideoReaction } from '../actions/event'
import timeStamp from '../time-stamps.json'
import clapping from './clapping.png'
import heart from './heart.png'
import star_face from './star_face.png'

const LiveVideo = () => {
    const iframe = useRef()
    const { video_url, video_offset, emojis } = useSelector(state => state.event)
    const dispatch = useDispatch()

    useEffect(() => {
        let interval = null

        const player = new Vimeo(iframe.current, { url: video_url, width: 800 })

        player.on('play', () => interval = setInterval(() => player.getCurrentTime().then(checkTimeStamp), 1000))
        player.on('pause', () => clearInterval(interval))
        const checkTimeStamp = (seconds) => {
            const hours = moment.duration(seconds, 'seconds').hours()
            const minute = moment.duration(seconds, 'seconds').minutes()
            const second = moment.duration(seconds, 'seconds').seconds()
            console.log(`${hours}:${minute}:${second}`)

            timeStamp.forEach(({ time_stamp, type, id, segment_id }, i) => {
                let itemTimeStamp = moment.duration(time_stamp)
                const currentTimeStamp = Math.round(moment.duration(seconds, 'seconds').asSeconds())

                if (segment_id && video_offset[segment_id]) {
                    itemTimeStamp.add(video_offset[segment_id], 's')
                }
                itemTimeStamp = Math.round(itemTimeStamp.asSeconds())

                if (currentTimeStamp === itemTimeStamp) {
                    if (type === 'diploma') {
                        dispatch(fetchGraduate(id))
                    }
                    console.log('item:', { time_stamp, type, id })
                    if (i === timeStamp.length - 1) {
                        clearInterval(interval)
                    }
                }
            })
        }
        player.play()
    })

    return <div className={styles.live_video} ref={iframe} >
        <div className={styles.live_video_reaction}>
            <button className={styles.emoji} onClick={() => dispatch(sendVideoReaction('clapping'))}>
                {emojis?.clapping || 0}<img className={styles.emoji_image} alt='' src={clapping} />
            </button>
            <button className={styles.emoji} onClick={() => dispatch(sendVideoReaction('heart'))}>
                {emojis?.heart || 0}<img className={styles.emoji_image} alt='' src={heart} />
            </button>
            <button className={styles.emoji} onClick={() => dispatch(sendVideoReaction('star_face'))}>
                {emojis?.star_face || 0}<img className={styles.emoji_image} alt='' src={star_face} />
            </button>
        </div>

    </div>
}

export default React.memo(LiveVideo)


    // < a href = "https://twitter.com/intent/tweet?button_hashtag=msmAlumni&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data - show - count="false" > Tweet #msmAlumni</a > <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>