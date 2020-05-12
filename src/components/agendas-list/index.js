import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import AgendaCard from '../agenda-card'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAgendas } from '../actions/agendas'
import Minus from './minus-svg'
import Plus from './plus-svg'

const AgendaList = () => {
    const [show, toggle] = useState(true)
    const agendas = useSelector(state => state.agendas.agendas)
    const dispatch = useDispatch()

    useEffect(() => dispatch(fetchAgendas()), [dispatch])

    return <div className={styles.agenda_list}>
        <div className={styles.header} >
            <p className={styles.title}>Order of Ceremony</p>
            <button className={styles.clops_button} onClick={() => toggle(!show)}>
                {show ? <Minus /> : <Plus />}
            </button>
        </div>
        {show && <div className={styles.agenda_list_body}>
            {agendas.map((agenda, i) => <AgendaCard key={i} {...agenda} />)}
        </div>}
    </div>
}

export default React.memo(AgendaList)
