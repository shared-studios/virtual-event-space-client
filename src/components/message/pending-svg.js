import React from 'react'
import styles from './styles.module.css'

const PendingSVG = () => {
    return (
        <div className={`${styles.pending} ${styles.status}`}>
            pending
            <svg style={{ width: ".6rem", marginLeft: "0.1rem" }} viewBox="0 0 24 24">
                <path fill="white" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
        </div>

    )
}
export default PendingSVG