import React, { useEffect } from 'react'
import styles from './styles.module.css'
import Agenda from '../agenda'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAgenda } from '../actions/agenda'

const AgendaList = () => {
    const agendas = useSelector(state => state.agendas)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAgenda())
    }, [dispatch])

    return (
        <div className={styles.agenda_list}>
            <p className={styles.title}>ORDER OF CEREMONY</p>
            <div className={styles.agenda_list_body}>
                {agendas.map((agenda, i) => <Agenda key={i} agenda={agenda} />)}
            </div>
        </div>
    )
}

export default React.memo(AgendaList)
