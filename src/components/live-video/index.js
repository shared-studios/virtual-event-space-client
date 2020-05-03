import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css'
import Vimeo from '@vimeo/player'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { fetchGraduate } from '../actions/graduates'
import timeStamp from '../time-stamps.json'

const LiveVideo = () => {
    const iframe = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        let interval = null
        const options = {
            url: "https://player.vimeo.com/video/413335387",
            width: 800
        };

        const player = new Vimeo(iframe.current, options)

        player.on('play', () => {
            interval = setInterval(() => {
                player.getCurrentTime().then(checkTimeStamp);
            }, 1000)
        })

        const checkTimeStamp = (seconds) => {
            const hours = moment.duration(seconds, 'seconds').hours()
            const minute = moment.duration(seconds, 'seconds').minutes()
            const second = moment.duration(seconds, 'seconds').seconds()
            console.log(`${hours}:${minute}:${second}`)

            timeStamp.forEach(({ time_stamp, type, id }, i) => {
                const itemTimeStamp = Math.round(moment.duration(time_stamp).asSeconds())
                const currentTimeStamp = Math.round(moment.duration(seconds, 'seconds').asSeconds())
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

    return <div className={styles.live_video} ref={iframe} />
}

export default React.memo(LiveVideo)


    // < a href = "https://twitter.com/intent/tweet?button_hashtag=msmAlumni&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data - show - count="false" > Tweet #msmAlumni</a > <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>