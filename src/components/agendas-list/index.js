import React, { useEffect } from 'react'
import styles from './styles.module.css'
import AgendaCard from '../agenda-card'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAgendas } from '../actions/agendas'
import { useSpring, animated } from 'react-spring'

const AgendaList = () => {
    const agendas = useSelector(state => state.agenda.agendas)
    const dispatch = useDispatch()
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 }
    })

    useEffect(() => dispatch(fetchAgendas()), [dispatch])

    return <animated.div style={props} className={styles.agenda_list}>
        <p className={styles.title}>Order of Ceremony</p>
        <div className={styles.agenda_list_body}>
            {agendas.map((agenda, i) => <AgendaCard key={i} {...agenda} />)}
        </div>
    </animated.div>
}

export default React.memo(AgendaList)
