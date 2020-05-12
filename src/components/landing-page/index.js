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
    const { viewers, type } = useSelector(({ user: { type }, event: { viewers } }) => ({ viewers, type }))
    return (
        // <Socket>
        <div className={styles.landing_page}>
            {console.log('LandingPage')}
            <Header />
            <div className={styles.viewers}><Eye /> {viewers}</div>
            <div className={styles.body}>
                <LiveVideo />
                <AgendasList />
                <div className={styles.graduates_comments}>
                    <Graduates />
                    {type !== 'public' && <Comments />}
                </div>
            </div>
            <Footer />
        </div>
        // </Socket>
    )
}

export default React.memo(LandingPage)
