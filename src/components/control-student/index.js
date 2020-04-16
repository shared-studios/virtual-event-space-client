import React, { useEffect } from 'react'
// import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCurrentStudent, updateCurrentStudent } from '../actions/student'

const StudentControl = () => {
    const students = useSelector(state => state.students)
    const student = students.filter((student) => student.status === 'current')[0]
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCurrentStudent())
    }, [dispatch])

    const handelNext = () => {
        const index = student?.index + 1
        if (index && index < students.length) {
            const student = students[index]
            if (student) {
                dispatch(updateCurrentStudent(student))
            }
        } else if (!index) {
            dispatch(updateCurrentStudent(students[0]))
        }
    }

    const handelPrevious = () => {
        const index = student?.index - 1
        if (index && index >= 0) {
            const student = students[index]
            if (student) {
                dispatch(updateCurrentStudent(student))
            }
        } else if (!index) {
            dispatch(updateCurrentStudent(students[0]))
        }
    }

    return (
        <div>
            {console.log('StudentControl')}
            <p>student</p>
            <p>current student: {student?.name}</p>
            <button onClick={handelPrevious}>previous</button>
            <button onClick={handelNext}>next</button>
        </div>
    )
}

export default React.memo(StudentControl)
