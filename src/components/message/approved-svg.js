import React from 'react'
import styles from './styles.module.css'

const ApprovedSVG = () => {
    return (
        <div className={`${styles.approved} ${styles.status}`}>
            approved
            <svg style={{ width: "1rem" }} viewBox="0 0 24 24">
                <path fill="white" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
            </svg>
        </div>
    )
}

export default ApprovedSVG
