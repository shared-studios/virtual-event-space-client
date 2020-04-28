import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCurrentStudent, updateReaction } from '../actions/current-student'
import { useTransition, animated } from 'react-spring'
import Reaction from '../student-reaction'
import emojiList from '../emojis.json'

const CurrentStudent = () => {
    const [currentEmojiType, setCurrentEmojiType] = useState(emojiList[0].type)
    const dispatch = useDispatch()
    const socket = useSelector(state => state.socket)
    const student = useSelector(state => state.current_student)
    const ReactedUsers = Object.values(student?.emojis?.[currentEmojiType] || {})
    const usersList = useRef()

    const transitions = useTransition(student, item => item.index, {
        from: { opacity: 0, transform: "scale(1.1)" },
        enter: { opacity: 1, transform: "scale(1)" },
        leave: { opacity: 0, transform: "scale(0.9)" },
    })

    useEffect(() => {
        dispatch(fetchCurrentStudent())
        socket.on('reaction', (data) => {
            dispatch(updateReaction(data))
        })
    }, [dispatch, socket])

    useEffect(() => {
        if (usersList.current) {
            usersList.current.scrollTop = usersList.current.scrollHeight
        }
    }, [ReactedUsers])

    return transitions.map(({ item: { event_id, index, name, degree, emojis }, key, props }) =>
        index && <div className={styles.current_student}>
            <animated.div key={key} style={props} className={styles.student}>
                <img className={styles.image} src={`https://${event_id}.s3.us-east-2.amazonaws.com/${name}.jpg`} alt='student' />
                <p className={styles.name}>{name}</p>
                <p className={styles.degree}>{degree}</p>
                <div className={styles.reactions}>
                    {emojiList.map(({ type, emoji }, i) => {
                        const count = `${emojis?.[type] ? Object.values(emojis?.[type]).length : 0}`
                        return (
                            <div
                                key={i}
                                className={`${styles.reaction} ${type === currentEmojiType && styles.current_tab}`}
                                onClick={() => setCurrentEmojiType(type)}
                            >
                                <span className={styles.emoji} role='img' aria-label={type}>{emoji}</span>
                                <p className={styles.count}>{count}</p>
                            </div>
                        )
                    })}
                </div>
            </animated.div>
            {ReactedUsers[0] && <div className={styles.users} ref={usersList}>
                {ReactedUsers.map(({ name }, i) => <span key={i}> {name}{ReactedUsers.length !== i + 1 && ', '} </span>)}
            </div>}
            <Reaction studentId={index} />
        </div>
    )
}

export default React.memo(CurrentStudent)