import React from 'react'
import styles from './styles.module.css'
import { sendReaction } from '../actions/current-student'
import { useDispatch } from 'react-redux'
import emojis from '../emojis.json'

const Reaction = ({ studentId }) => {
    const dispatch = useDispatch()

    return (
        <div className={styles.reaction}>
            <p className={styles.title}>SEND YOUR CONGRATULATIONS!</p>
            <div className={styles.emojis}>
                {emojis.map(({ name, emoji }, i) => {
                    return (
                        <button key={i} className={styles.emoji} onClick={() => dispatch(sendReaction(studentId, name))}>
                            <span role='img' aria-label={name}>{emoji}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default React.memo(Reaction)