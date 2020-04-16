import React, { useEffect } from 'react';
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateCurrentStudent, fetchCurrentStudent } from '../actions/current-student'

const CurrentStudent = () => {
    const dispatch = useDispatch()
    const student = useSelector(state => state.current_student)
    const socket = useSelector(state => state.socket)

    useEffect(() => {
        dispatch(fetchCurrentStudent())
        socket.on('current-student', (student) => {
            console.log(student)
            dispatch(updateCurrentStudent(student))
        })
    }, [dispatch, socket])

    return (
        <div className={styles.current_student}>
            {console.log('CurrentStudent')}
            {student && <img className={styles.image} alt='student' src={student.image} />}
            {student && <p className={styles.name}>{student.name}</p>}
            {student && <p className={styles.degree}>{student.degree}</p>}
        </div>
    )
}

export default React.memo(CurrentStudent)