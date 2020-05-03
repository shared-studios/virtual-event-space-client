import React from 'react'
import styles from './styles.module.css'
import { sendReaction } from '../actions/graduates'
import { useSelector, useDispatch } from 'react-redux'
import emojiList from '../emojis.json'

const Reaction = ({ studentId }) => {
    const dispatch = useDispatch()
    const emojis = useSelector(state => state.graduates.emojis)
    const user = useSelector(state => state.user)

    return (
        <div className={styles.reaction}>
            <div className={styles.emojis}>
                {emojiList.map(({ type, emoji }, i) => {
                    return (
                        <button
                            key={i}
                            className={styles.emoji}
                            onClick={() => dispatch(sendReaction(studentId, type))}
                            disabled={emojis?.[type]?.[user.id]}
                        >
                            <span role='img' aria-label={type}>{emoji} {0}</span>
                        </button>
                    )
                })}
                {console.log('Reaction')}
            </div>
        </div>
    )
}

export default React.memo(Reaction)