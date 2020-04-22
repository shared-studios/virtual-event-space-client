import React, { useEffect } from 'react';
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCurrentStudent, updateReaction } from '../actions/current-student'
import Reaction from '../reaction'

const CurrentStudent = () => {
    const dispatch = useDispatch()
    const student = useSelector(state => state.current_student)
    const socket = useSelector(state => state.socket)

    useEffect(() => {
        dispatch(fetchCurrentStudent())
        socket.on('reaction', (student) => {
            dispatch(updateReaction(student))
        })
    }, [dispatch, socket])

    return (
        <React.Fragment>
            {console.log('CurrentStudent')}
            {student.index && <div className={styles.current_student}>
                <div className={styles.student}>
                    <img className={styles.image} alt='student' src={student.image} />
                    <p className={styles.name}>{student.name}</p>
                    <p className={styles.degree}>{student.degree}</p>
                    <div className={styles.reactions}>
                        <div className={styles.reaction}>
                            <span className={styles.emoji} role='img' aria-label="celebrate">🎉</span>
                            <p className={styles.count}>{student.celebrate}</p>
                        </div>
                        <div className={styles.reaction}>
                            <span className={styles.emoji} role='img' aria-label="heart">♥️</span>
                            <p className={styles.count}>{student.heart}</p>
                        </div>
                        <div className={styles.reaction}>
                            <span className={styles.emoji} role='img' aria-label="thumbs_up">👍</span>
                            <p className={styles.count}>{student.thumbs_up}</p>
                        </div>
                    </div>
                </div>
                <Reaction studentId={student.student_id} />
            </div>}
        </React.Fragment>
    )
}

export default React.memo(CurrentStudent)