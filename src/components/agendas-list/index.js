import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import AgendaCard from '../agenda-card'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAgendas } from '../actions/agendas'
import Minus from './minus-svg'
import Plus from './plus-svg'

const AgendaList = () => {
    const [show, toggle] = useState(true)
    const agendas = useSelector(({ agendas: { agendas } }) => agendas)
    const graduates = useSelector(({ graduates }) => graduates)
    const dispatch = useDispatch()

    useEffect(() => {
        if (Object.values(graduates).length > 0 && window.innerWidth <= 900) {
            toggle(false)
        } else {
            toggle(true)
        }
    }, [graduates])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                toggle(true)
            }
        }
        window.addEventListener('resize', handleResize)
        dispatch(fetchAgendas())
        return () => window.removeEventListener('resize', handleResize)
    }, [dispatch])

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
