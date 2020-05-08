import React from 'react';
import styles from './styles.module.css'
import logo from './logo.png'
import chatWithUs from './chat-with-us.png'
import { useSelector } from 'react-redux'

const Footer = () => {
    const copyright = useSelector(state => state.event.copyright)

    return (
        <div className={styles.footer}>
            {console.log('Footer')}
            <p className={styles.powered_by}>Powered By <img className={styles.logo} alt='logo' src={logo} /></p>
            {copyright && <p className={styles.copyright}>© {copyright}</p>}
            <img className={styles.chat_with_us} alt='chat with us' src={chatWithUs} />
        </div>
    )
}

export default React.memo(Footer)
