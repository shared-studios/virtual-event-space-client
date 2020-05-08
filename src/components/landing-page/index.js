import React from 'react';
import styles from './styles.module.css'
import AgendasList from '../agendas-list'
import Graduates from '../graduates-list'
import Comments from '../comments-list'
import Header from '../header'
import Socket from '../socket'
import LiveVideo from '../live-video'
import Footer from '../footer'
import { useSelector } from 'react-redux'
import Eye from './eye-svg'

const LandingPage = () => {
    const viewers = useSelector(state => state.event.viewers)
    return (
        <Socket>
            {console.log('LandingPage')}
            <div className={styles.landing_page}>
                <Header />
                <div className={styles.body}>
                    <div className={styles.viewers}><Eye /> {viewers}</div>
                    <LiveVideo />
                    <AgendasList />
                    <div className={styles.graduates_comments}>
                        <Graduates />
                        <Comments />
                    </div>
                    <Footer />
                </div>
            </div>
        </Socket>
    )
}

export default React.memo(LandingPage)
