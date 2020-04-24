import React, { useEffect } from 'react'
import styles from './styles.module.css'
import Agenda from '../agenda'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAgenda } from '../actions/agenda'
import { useSpring, animated } from 'react-spring'

const AgendaList = () => {
    const agendas = useSelector(state => state.agendas)
    const dispatch = useDispatch()
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 }
    })

    useEffect(() => dispatch(fetchAgenda()), [dispatch])

    return <animated.div style={props} className={styles.agenda_list}>
        <p className={styles.title}>ORDER OF CEREMONY</p>
        <div className={styles.agenda_list_body}>
            {agendas.map((agenda, i) => <Agenda key={i} agenda={agenda} />)}
        </div>
    </animated.div>
}

export default React.memo(AgendaList)
