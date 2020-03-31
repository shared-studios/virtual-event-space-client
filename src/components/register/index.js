import React from 'react'
import styles from './styles.module.css'

const Register = () => {
    return (
        <div className={styles.register}>
            <div className={styles.avatar} />
            <input name='name' className={`${styles.name_input} ${styles.register_input}`} placeholder="Name" />
            <input name='company' className={`${styles.company_input} ${styles.register_input}`} placeholder="Company/Organization" />
            <div className={`${styles.event_input} ${styles.register_input}`}>
                Please select at list one scheduled events on the left you'd like to attend
            </div>
            <button className={styles.create_badge_button}>Create badge</button>
            <button className={styles.cancel_button}>Cancel</button>
        </div>
    )
}

export default React.memo(Register)