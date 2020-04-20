import React, { useEffect, useState } from 'react'
// import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAgenda } from '../actions/agenda'

const AgendaControl = () => {
    const [agenda, setAgenda] = useState()
    const agendas = useSelector(state => state.agendas)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAgenda())
    }, [dispatch])

    useEffect(() => {
        const agenda = agendas.filter((agenda) => agenda.status === 'current')[0] || agendas[0]
        setAgenda(agenda)
    }, [agendas])

    const handleOnChange = (e) => {
        const index = e.target.value
        console.log(index)
        setAgenda(index ? agendas[index] : '')
    }

    return (
        <div>
            {console.log('AgendaControl')}
            <label>agenda: </label>
            <select
                value={agenda?.index}
                onChange={handleOnChange}
                name={agenda}
            >
                {agendas.map((agenda, i) => {
                    return <option key={i} value={i}> {agenda.title}</option>
                })}
            </select>
        </div>
    )
}

export default React.memo(AgendaControl)
