import React from 'react';
import styles from './styles.module.css'
import AgendasList from '../agendas-list'
import Graduates from '../graduates-list'
import Comments from '../comments-list'
import Error from '../error'
import Header from '../header'
import Socket from '../socket'
import LiveVideo from '../live-video'
import Authentication from '../authentication'

const LandingPage = (props) => {
    const { event_id, user_id } = props.match.params

    return (
        <Authentication eventId={event_id} userId={user_id}>
            <Socket>
                {console.log('LandingPage')}
                <div className={styles.landing_page}>
                    <Header />
                    <LiveVideo />
                    <AgendasList />
                    <div className={styles.graduates_comments}>
                        <Graduates />
                        <Comments />
                    </div>
                </div>
            </Socket>
            {/* <Error /> */}
        </Authentication>
    )
}

export default React.memo(LandingPage)
