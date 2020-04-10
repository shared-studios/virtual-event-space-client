import React from 'react';
import styles from './styles.module.css'

const Header = () => {
    return (
        <div className={styles.header}>Header</div>
    )
}

export default React.memo(Header)
