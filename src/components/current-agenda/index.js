import React, { useEffect } from 'react';
import styles from './styles.module.css'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { OnUpdateCurrentAgenda } from '../actions/agenda'

const CurrentAgenda = () => {
    const socket = useSelector(state => state.socket)
    const dispatch = useDispatch()
    const agenda = useSelector(state => state.agendas.filter((agenda) => agenda.status === 'current')[0])

    useEffect(() => {
        socket.on('current-agenda', ({ time }) => {
            dispatch(OnUpdateCurrentAgenda(time))
        })
    }, [dispatch, socket])

    return (
        <div className={styles.current_agenda}>
            {console.log('CurrentAgenda')}
            {agenda && <p className={styles.time_title}>{moment(agenda.time).format('h:mmA')}_{agenda.title}</p>}
            {agenda && <p className={styles.description}>{agenda.description}</p>}
        </div>
    )
}

export default React.memo(CurrentAgenda)