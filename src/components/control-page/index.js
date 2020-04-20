import React from 'react'
// import styles from './styles.module.css'
import Authentication from '../authentication'
import AgendaControl from '../control-agenda'
import StudentControl from '../control-student'
import { useSelector, useDispatch } from 'react-redux'
import { updateCurrentStudent } from '../actions/student'
import { updateCurrentAgenda } from '../actions/agenda'


const ControlPage = (props) => {
    const { event_id, user_id } = props.match.params
    const publish = useSelector(state => state.publish)
    const dispatch = useDispatch()

    const handlePublish = () => {
        dispatch(updateCurrentStudent(publish.agenda))
        dispatch(updateCurrentAgenda(publish.student))
    }
    return (
        <Authentication eventId={event_id} userId={user_id}>
            {console.log('ControlPage')}
            <AgendaControl />
            <StudentControl />
            <button onClick={handlePublish}>Publish</button>
        </Authentication>
    )
}

export default React.memo(ControlPage)
