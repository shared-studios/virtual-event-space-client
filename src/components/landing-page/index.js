import React from 'react';
import styles from './styles.module.css'
import AgendasList from '../agendas-list'
import Graduates from '../graduates-list'
import Comments from '../comments-list'
import Header from '../header'
import Socket from '../socket'
import LiveVideo from '../live-video'
import Footer from '../footer'

const LandingPage = () => {
    return (
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
                <Footer />
            </div>
        </Socket>
    )
}

export default React.memo(LandingPage)
