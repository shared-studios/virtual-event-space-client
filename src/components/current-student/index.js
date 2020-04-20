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
        <React.Fragment>
            {student && <div className={styles.current_student}>
                {console.log('CurrentStudent')}
                <img className={styles.image} alt='student' src={student.image} />
                <p className={styles.name}>{student.name}</p>
                <p className={styles.degree}>{student.degree}</p>
            </div>}
        </React.Fragment>
    )
}

export default React.memo(CurrentStudent)