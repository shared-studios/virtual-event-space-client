import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'
import Vimeo from '@vimeo/player'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { sendVideoReaction } from '../actions/agendas'
import clapping from './clapping.png'
import heart from './heart.png'
import star_face from './star_face.png'
import useCheckTime from './useCheckTime'

const LiveVideo = () => {
    const iframe = useRef()
    const video_url = useSelector(({ event: { video_url } }) => video_url)
    const graduatesLength = useSelector(({ graduates }) => Object.keys(graduates).length)
    const dispatch = useDispatch()
    const checkTime = useCheckTime()

    useEffect(() => {
        let previousTimeStamp = 0
        const player = new Vimeo(iframe.current)
        // player.play()

        const preCheckTime = ({ seconds }) => {
            const currentTimeStamp = Math.round(moment.duration(seconds, 'seconds').asSeconds())
            if (currentTimeStamp !== previousTimeStamp) {
                checkTime(currentTimeStamp)
                previousTimeStamp = currentTimeStamp
            }
        }

        player.on('timeupdate', preCheckTime)
    }, [dispatch, video_url, checkTime])


    return <div className={styles.live_video}>
        {console.log('video')}
        <iframe
            ref={iframe}
            className={styles.iframe}
            title="live stream"
            src={video_url}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen={true}
        />
        {graduatesLength === 0 && <VideoEmojis emojis={['clapping', 'heart', 'star_face']} />}
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

