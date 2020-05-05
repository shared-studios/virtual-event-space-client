import React from 'react'
import styles from './styles.module.css'
import { useSpring, animated } from 'react-spring'
import { useSelector } from "react-redux"
import Reaction from '../graduate-reaction'

const DiplomaCard = (props) => {
    const { first_name, last_name, degree, id } = props
    const event = useSelector(state => state.event)
    const prop = useSpring({
        from: { opacity: 0, height: '0px', transform: 'translateY(-100%)' },
        to: { opacity: 1, height: '126.59px', transform: 'translateY(0%)' }
    })

    return <animated.div style={prop} className={styles.diploma_card}>
        <img className={styles.image} alt='student' src={`${event.image_link}/NAME_${id}.jpg`} />
        <p className={styles.name}>{first_name} {last_name}</p>
        <p className={styles.degree}>{degree}</p>
        <Reaction id={id} />
    </animated.div>
}

export default React.memo(DiplomaCard)
