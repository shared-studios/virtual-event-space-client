import React from 'react'
import styles from './styles.module.css'
import { sendReaction } from '../actions/graduates'
import { useDispatch, useSelector } from 'react-redux'
import { useTransition, animated, config } from 'react-spring'
import emojis from '../emojis'

const EmojiButton = ({ id, type }) => {
    const graduate = useSelector(state => state.graduates[id]) || 0
    const count = graduate?.[type]?.count || 0
    const clicked = graduate?.[type]?.clicked || false
    const dispatch = useDispatch()
    const transitions = useTransition(count, null, {
        from: { position: 'static', opacity: 1, transform: 'translateY(0%)' },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: { position: 'absolute', opacity: 0, transform: 'translateY(-150%)' },
        config: { config: config.wobbly }
    })

    return (
        <button
            className={styles.emoji}
            onClick={() => dispatch(sendReaction(id, type))}
            disabled={clicked}>
            {transitions.map(({ key, props }) => {
                return <animated.img
                    key={key}
                    style={props}
                    className={styles.emoji_image}
                    alt={type}
                    src={emojis[type]}
                />
            })}
            <span className={styles.count}> {count}</span>
        </button>
    )
}

export default React.memo(EmojiButton)