import React, { useEffect, useRef, useState } from 'react';
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
        console.log('video useEffect')
        let interval = null
        const player = new Vimeo(iframe.current, { url: video_url, width: 800 })
        // player.play()
        player.on('pause', () => clearInterval(interval))
        interval = setInterval(() => player.getCurrentTime().then(checkTimeStamp), 1000)

        const checkTimeStamp = (seconds) => timeStamp.forEach(({ time_stamp, type, id, video_id }) => {
            const currentTimeStamp = Math.round(moment.duration(seconds, 'seconds').asSeconds())
            const video = video_offset.find(({ id }) => id === video_id)
            let itemTimeStamp = moment.duration(time_stamp)
            let preRecordedVideoStarted = false

            if (video && video.duration > 0) {
                itemTimeStamp.add(video.duration, 's')
                preRecordedVideoStarted = true
            }

            console.log('Pre Recorded Video Started:', preRecordedVideoStarted)
            itemTimeStamp = Math.round(itemTimeStamp.asSeconds())

            if (preRecordedVideoStarted && currentTimeStamp === itemTimeStamp) {
                if (type === 'diploma') dispatch(fetchGraduate(id))
                if (type === 'diploma-over') {
                    clearInterval(interval)
                    console.log('Interval cleared')
                    setTimeout(() => dispatch({ type: 'EMPTY-GRADUATE' }), 8000)
                }
                console.log('item:', { time_stamp, type, id })
            }
        })
        return () => clearInterval(interval)
    }, [dispatch, video_offset, video_url])

    return <div className={styles.live_video} ref={iframe} >
        {console.log('video')}
        <div className={styles.viewers}><Eye /> {viewers}</div>
        {Object.keys(graduates).length === 0 && <VideoEmojis emojis={['clapping', 'heart', 'star_face']} />}
    </div>
}

export default React.memo(LiveVideo)


const VideoEmojis = ({ emojis: list }) => {
    const current = useSelector(state => state.agendas.current)
    return <div className={styles.live_video_reaction}>
        {list.map((emoji, i) => <VideoEmojiButton key={i} current={current} emoji={emoji} />)}
    </div>
}

const VideoEmojiButton = ({ current, emoji }) => {
    const agendas = useSelector(state => state.agendas.agendas[current])
    const count = agendas?.[emoji]?.count || 0
    const [clicked, setClicked] = useState()
    const dispatch = useDispatch()
    const images = { clapping, heart, star_face }

    const onClick = () => {
        dispatch(sendVideoReaction(current, emoji))
        setClicked(true)
    }

    return (
        <button className={styles.emoji} onClick={onClick} disabled={agendas?.[emoji]?.clicked || clicked}>
            {count}
            <img className={styles.emoji_image} alt='' src={images[emoji]} />
        </button>
    )
}

