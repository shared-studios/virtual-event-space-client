import React, { useEffect, useState } from 'react'
// import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStudents } from '../actions/student'

const StudentControl = () => {
    const [student, setStudent] = useState()
    const students = useSelector(state => state.students)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStudents())
    }, [dispatch])

    useEffect(() => {
        const student = students.filter((student) => student.status === 'current')[0]
        setStudent(student)
    }, [students])

    const handleOnChange = (e) => {
        const index = e.target.value
        console.log(index)
        setStudent(index ? students[index] : '')
    }

    return (
        <div>
            {console.log('StudentControl')}
            <label>student: </label>
            <select
                value={student?.index}
                onChange={handleOnChange}
                name={student}
            >
                <option value=''>Select Student...</option>
                {students.map((student, i) => {
                    return <option key={i} value={i}> {student.name}</option>
                })}
            </select>
        </div>
    )
}

export default React.memo(StudentControl)
