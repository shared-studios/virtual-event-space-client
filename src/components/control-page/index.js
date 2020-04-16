import React from 'react'
// import styles from './styles.module.css'
import Authentication from '../authentication'
import Socket from '../socket'
import AgendaControl from '../control-agenda'
import StudentControl from '../control-student'

const ControlPage = (props) => {
    const { event_id, user_id } = props.match.params

    return (
        <Authentication eventId={event_id} userId={user_id}>
            {console.log('ControlPage')}
            <AgendaControl />
            <StudentControl />
        </Authentication>
    )
}

export default React.memo(ControlPage)
