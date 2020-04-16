import React from 'react';
import Header from '../header'
import Chat from '../chat'
import CurrentStudent from '../current-student'
import LiveVideo from '../live-video'
import CurrentAgenda from '../current-agenda'
import AgendaList from '../agenda-list'
import styles from './styles.module.css'
import Authentication from '../authentication'
import Socket from '../socket'

const LandingPage = (props) => {
    const { event_id, user_id } = props.match.params

    return (
        <Authentication eventId={event_id} userId={user_id}>
            <Socket>
                {console.log('LandingPage')}
                <div className={styles.landing_page}>
                    <Header />
                    <AgendaList />
                    <LiveVideo />
                    <CurrentAgenda />
                    <CurrentStudent />
                    <Chat />
                </div>
            </Socket>
        </Authentication>
    )
}

export default React.memo(LandingPage)
