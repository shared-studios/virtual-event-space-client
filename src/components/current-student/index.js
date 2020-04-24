import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCurrentStudent, updateReaction } from '../actions/current-student'
import Reaction from '../student-reaction'
import emojis from '../emojis.json'
import { useTransition, animated } from 'react-spring'

const CurrentStudent = () => {
    const [currentTab, setCurrentTab] = useState(0)
    const dispatch = useDispatch()
    const student = useSelector(state => state.current_student)
    const socket = useSelector(state => state.socket)
    const users = student[emojis[currentTab].name]
    const usersList = useRef()

    const transitions = useTransition(student, item => item.index, {
        from: { opacity: 0, transform: "scale(1.1)" },
        enter: { opacity: 1, transform: "scale(1)" },
        leave: { opacity: 0, transform: "scale(0.9)" }
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
    }, [student])

    return transitions.map(({ item: { event_id, index, name, degree }, key, props }) =>
        index && <div className={styles.current_student}>
            <animated.div key={key} style={props} className={styles.student}>
                <img className={styles.image} src={`https://${event_id}.s3.us-east-2.amazonaws.com/${name}.jpg`} alt='student' />
                <p className={styles.name}>{name}</p>
                <p className={styles.degree}>{degree}</p>
                <div className={styles.reactions}>
                    {emojis.map(({ name, emoji }, i) => {
                        return (
                            <div key={i} className={`${styles.reaction} ${i === currentTab && styles.current_tab}`} onClick={() => setCurrentTab(i)}>
                                <span className={styles.emoji} role='img' aria-label={name}>{emoji}</span>
                                <p className={styles.count}>{student[name]?.length || 0}</p>
                            </div>
                        )
                    })}
                </div>
            </animated.div>
            {users && <div className={styles.users} ref={usersList}>
                {users.map((user, i) => <span key={i}>{user}{users.length !== i + 1 && ', '}</span>)}
            </div>}
            <Reaction studentId={index} />
        </div>
    )
}

export default React.memo(CurrentStudent)