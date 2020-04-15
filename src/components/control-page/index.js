import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAgenda, fetchCurrentAgenda, updateCurrentAgenda } from '../actions/agenda'
import { axios } from '../custom-module'
import useAuthentication from '../custom-module/authentication'

const ControlPage = (props) => {
    const { event_id, user_id } = props.match.params
    const { authenticated } = useAuthentication(event_id, user_id)
    const agendas = useSelector(state => state.agendas)
    const agenda = useSelector(({ agendas }) => agendas.filter((agenda) => agenda.status === 'current')[0])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAgenda())
        dispatch(fetchCurrentAgenda())
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
        console.log(time)
        if (time) {
            axios.put(`current-agenda/${time}`)
                .then(() => {
                    dispatch(updateCurrentAgenda(time))
                })
        }
    }


    return (
        <React.Fragment>
            {console.log('ControlPage')}
            {authenticated && <div>
                <div>
                    <p>agenda</p>
                    <p>current agenda: {agenda?.title}</p>
                    <button onClick={handelPrevious}>previous</button>
                    <button onClick={handelNext}>next</button>
                </div>
            </div>}
        </React.Fragment>

    )
}

export default React.memo(ControlPage)
