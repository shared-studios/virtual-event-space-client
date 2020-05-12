import { useEffect, useState } from 'react';
import { fetchGraduate } from '../actions/graduates'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

const CheckTime = () => {
    const { video_offset, time_track } = useSelector(({ event: { video_offset, time_track } }) => ({ video_offset, time_track }))
    const dispatch = useDispatch()
    const [time, checkTime] = useState(0)

    useEffect(() => {
        let preRecordedVideoStarted = false
        time_track.forEach(({ time_stamp, type, id, video_id }) => {
            const video = video_offset.find(({ id }) => id === video_id)
            let itemTimeStamp = moment.duration(time_stamp)

            if (video?.duration > 0) {
                itemTimeStamp.add(video.duration, 's')
                preRecordedVideoStarted = true
            }

            itemTimeStamp = Math.round(itemTimeStamp.asSeconds())

            if (preRecordedVideoStarted && time === itemTimeStamp) {
                if (type === 'diploma') dispatch(fetchGraduate(id))
                if (type === 'diploma-over') dispatch({ type: 'EMPTY-GRADUATE' })
                // console.log('item:', { time_stamp, type, id })
            }
        })
    }, [dispatch, video_offset, time, time_track])

    return checkTime
}

export default CheckTime
