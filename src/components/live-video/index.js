import React, { useEffect } from 'react';
import styles from './styles.module.css'
import CurrentAgenda from '../current-agenda'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCurrentAgenda, updateCurrentAgenda } from '../actions/agenda'

const LiveVideo = () => {
    const socket = useSelector(state => state.socket)
    const dispatch = useDispatch()
    const agenda = useSelector(({ agendas }) => agendas.filter((agenda) => agenda.status === 'current')[0])

    useEffect(() => {
        dispatch(fetchCurrentAgenda())
        socket.on('current-agenda', ({ time }) => {
            console.log(time)
            dispatch(updateCurrentAgenda(time))
        })
    }, [dispatch, socket])

    return (
        <div className={styles.live_video}>
            <video className={styles.video} src='' />
            {agenda && <CurrentAgenda agenda={agenda} />}
        </div>
    )
}

export default React.memo(LiveVideo)
