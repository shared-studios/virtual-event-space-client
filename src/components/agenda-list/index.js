import React, { useEffect } from 'react'
import Agenda from '../agenda'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.css'
import axios from 'axios'

const AgendaList = () => {
    const token = useSelector(state => state.user.token)
    const agendas = useSelector(state => state.agendas)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://auhb4v0d92.execute-api.us-east-2.amazonaws.com/agenda', {
            headers: {
                authorization: token
            }
        }).then((res) => {
            console.log(res)
            dispatch({ type: 'AGENDAS', payload: res.data })
        }).catch((error) => {
            console.log(error.response)
        })
    }, [token, dispatch])

    return (
        <div className={styles.agenda_list}>
            <p className={styles.title}>ORDER OF CEREMONY</p>
            {agendas.map(({ time, title }, i) => <Agenda key={i} time={time} title={title} />)}
        </div>
    )
}

export default React.memo(AgendaList)
