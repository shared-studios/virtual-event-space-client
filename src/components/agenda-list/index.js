import React, { useEffect } from 'react'
import Agenda from '../agenda'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.css'
import { fetchAgenda } from '../actions/agenda-fetch'

const AgendaList = () => {
    const agendas = useSelector(state => state.agendas)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAgenda())
    }, [dispatch])

    return (
        <div className={styles.agenda_list}>
            <p className={styles.title}>ORDER OF CEREMONY</p>
            {agendas.map(({ time, title }, i) => <Agenda key={i} time={time} title={title} />)}
        </div>
    )
}

export default React.memo(AgendaList)
