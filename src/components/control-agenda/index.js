import React, { useEffect } from 'react'
// import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAgenda, updateCurrentAgenda } from '../actions/agenda'
import { axios } from '../custom-module'

const AgendaControl = () => {
    const agendas = useSelector(state => state.agendas)
    const agenda = agendas.filter((agenda) => agenda.status === 'current')[0] || agendas[0]
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAgenda())
    }, [dispatch])

    const handelNext = () => {
        const index = agenda.index + 1
        if (index < agendas.length) {
            const time = agendas[index]?.time
            updateAgenda(time)
        }
    }

    const handelPrevious = () => {
        const index = agenda.index - 1
        if (index >= 0) {
            const time = agendas[index]?.time
            updateAgenda(time)
        }
    }

    const updateAgenda = (time) => {
        if (time) {
            axios.put(`current-agenda/${time}`)
                .then(() => {
                    dispatch(updateCurrentAgenda(time))
                })
        }
    }

    return (
        <div>
            {console.log('AgendaControl')}
            <p>agenda</p>
            <p>current agenda: {agenda?.title}</p>
            <button onClick={handelPrevious}>previous</button>
            <button onClick={handelNext}>next</button>
        </div>
    )
}

export default React.memo(AgendaControl)
