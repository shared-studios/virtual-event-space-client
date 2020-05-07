import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css'
import Vimeo from '@vimeo/player'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGraduate } from '../actions/graduates'
import { sendVideoReaction } from '../actions/agendas'
import timeStamp from '../time-stamps.json'
import clapping from './clapping.png'
import heart from './heart.png'
import star_face from './star_face.png'
import Eye from './eye-svg'

const LiveVideo = () => {
    const iframe = useRef()
    const graduates = useSelector(state => state.graduates)
    const viewers = useSelector(state => state.event.viewers)
    const video_offset = useSelector(state => state.event.video_offset)
    const video_url = useSelector(state => state.event.video_url)
    const dispatch = useDispatch()

    useEffect(() => {
        let interval = null

        const player = new Vimeo(iframe.current, { url: video_url, width: 800 })
        player.on('play', () => interval = setInterval(() => player.getCurrentTime().then(checkTimeStamp), 1000))
        player.on('pause', () => clearInterval(interval))
        const checkTimeStamp = (seconds) => {
            // const hours = moment.duration(seconds, 'seconds').hours()
            // const minute = moment.duration(seconds, 'seconds').minutes()
            // const second = moment.duration(seconds, 'seconds').seconds()
            // console.log(`${hours}:${minute}:${second}`)

            timeStamp.forEach(({ time_stamp, type, id, segment_id }, i) => {
                let itemTimeStamp = moment.duration(time_stamp)
                const currentTimeStamp = Math.round(moment.duration(seconds, 'seconds').asSeconds())
                let segmentStarted = true
                if (segment_id && video_offset[segment_id] && video_offset[segment_id] > 0) {
                    itemTimeStamp.add(video_offset[segment_id], 's')
                    // const hours = itemTimeStamp.hours()
                    // const minute = itemTimeStamp.minutes()
                    // const second = itemTimeStamp.seconds()
                    // console.log({ id, segment_id, video_offset: video_offset[segment_id], time: `${hours}:${minute}:${second}` })
                    console.log('segment started:', segmentStarted)
                } else {
                    segmentStarted = false
                    console.log('segment started:', segmentStarted)
                }

                itemTimeStamp = Math.round(itemTimeStamp.asSeconds())

                if (segmentStarted && currentTimeStamp === itemTimeStamp) {
                    if (type === 'diploma') dispatch(fetchGraduate(id))
                    if (type === 'diploma-over') {
                        clearInterval(interval)
                        console.log('Interval cleared')
                        setTimeout(() => dispatch({ type: 'EMPTY-GRADUATE' }), 8000);
                    }
                    // console.log('item:', { time_stamp, type, id })
                }
            })
        }
        // player.play()
        return () => clearInterval(interval)
    }, [dispatch, video_offset, video_url])

    return <div className={styles.live_video} ref={iframe} >
        <div className={styles.viewers}><Eye /> {viewers}</div>
        {Object.keys(graduates).length === 0 && <VideoEmojis emojis={['clapping', 'heart', 'star_face']} />}
    </div>
}

export default React.memo(LiveVideo)


const VideoEmojis = ({ emojis: list }) => {
    const current = useSelector(state => state.agenda.current)
    return <div className={styles.live_video_reaction}>
        {list.map((emoji, i) => <VideoEmojiButton key={i} current={current} emoji={emoji} />)}
    </div>
}

const VideoEmojiButton = ({ current, emoji: type }) => {
    const agendas = useSelector(state => state.agenda.agendas[current])
    const emoji = agendas?.[type]
    const dispatch = useDispatch()
    const images = { clapping, heart, star_face }

    return <button
        className={styles.emoji}
        onClick={() => dispatch(sendVideoReaction(current, type))}
        disabled={emoji?.clicked || false}>
        {emoji?.count || 0}<img className={styles.emoji_image} alt='' src={images[type]} />
    </button>
}

