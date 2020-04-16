import React from 'react';
import styles from './styles.module.css'
import logo from './logo.png'

const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} alt='logo' src={logo} />
            <p className={styles.title_1}>SATURDAY MAY 25, 2020</p>
            <p className={styles.title_2_1}>CONVOCATION, DEGREE, AND CONFERRAL CEREMONY</p>
            <p className={styles.title_2_2}>Commencement Address: Ellen J. Kullman</p>
            <p className={styles.title_3}>CONGRATULATIONS CLASS!</p>
        </div>
    )
}

export default React.memo(Header)
