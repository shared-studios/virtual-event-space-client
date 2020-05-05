import React from 'react';
import styles from './styles.module.css'
import logo from './logo.png'
import chatWithUs from './chat-with-us.png'

const Footer = () => {
    return (
        <div className={styles.footer}>
            {console.log('Footer')}
            <p className={styles.powered_by}>Powered By <img className={styles.logo} alt='logo' src={logo} /></p>
            <img className={styles.chat_with_us} alt='chat with us' src={chatWithUs} />
        </div>
    )
}

export default React.memo(Footer)
