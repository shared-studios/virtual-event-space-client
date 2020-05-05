import React from 'react'
import styles from './styles.module.css'
import { sendReaction } from '../actions/graduates'
import { useDispatch, useSelector } from 'react-redux'
import emojis from '../emojis'

const Reaction = ({ id }) => {
    const graduate = useSelector(state => state.graduates[id])
    const dispatch = useDispatch()

    return (
        <div className={styles.reaction}>
            <div className={styles.emojis}>
                {console.log('Reaction', graduate)}
                {emojis.list.map((type, i) => {
                    return (
                        <button
                            key={i}
                            className={styles.emoji}
                            onClick={() => dispatch(sendReaction(graduate.id, type))}
                            disabled={graduate?.[type]?.clicked || false}>
                            <img className={styles.emoji_image} alt={type} src={emojis[type]} />{graduate?.[type]?.count || 0}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default React.memo(Reaction)