import React from 'react'
import styles from './styles.module.css'
import EmojiButton from '../graduate-emoji-button'
import { useSpring, animated } from 'react-spring'
import emojis from '../emojis'

const DiplomaCard = (props) => {
    const { first_name, last_name, degree, id, image_link } = props
    const prop = useSpring({
        from: { opacity: 0, height: '0px', transform: 'translateY(-100%)' },
        to: { opacity: 1, height: '126.59px', transform: 'translateY(0%)' }
    })

    return <animated.div style={prop} className={styles.diploma_card}>
        <img className={styles.image} alt='student' src={`${image_link}/NAME_${id}.jpg`} />
        <p className={styles.name}>{first_name} {last_name}</p>
        <p className={styles.degree}>{degree}</p>
        <div className={styles.emojis}>
            {emojis.list.map((type, i) => <EmojiButton key={i} type={type} id={id} />)}
        </div>
    </animated.div>
}

export default React.memo(DiplomaCard)
