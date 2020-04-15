import React from 'react';
import Header from '../header'
import Chat from '../chat'
import LiveContent from '../live-content'
import LiveVideo from '../live-video'
import AgendaList from '../agenda-list'
import styles from './styles.module.css'
import useAuthentication from '../custom-module/authentication'
import useSocket from '../socket'

const LandingPage = (props) => {
    const { event_id, user_id } = props.match.params
    const { authenticated } = useAuthentication(event_id, user_id)
    const connected = useSocket()

    return (
        <React.Fragment>
            {console.log('LandingPage')}
            {(authenticated && connected) &&
                <div className={styles.landing_page}>
                    <Header />
                    <AgendaList />
                    <LiveVideo />
                    <LiveContent />
                    <Chat />
                </div>}
        </React.Fragment>
    )
}

export default React.memo(LandingPage)
