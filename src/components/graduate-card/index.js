import React from 'react'
import styles from './styles.module.css'
import EmojiButton from '../graduate-emoji-button'
import emojis from '../emojis'

const DiplomaCard = ({ first_name, last_name, degree, id, image_link }) => {

    return <div className={styles.diploma_card}>
        <img className={styles.image} alt='student' src={`${image_link}/${first_name}_${last_name}.jpg`} />
        <p className={styles.name}>{first_name} {last_name}</p>
        <div className={styles.degree}>{degree}</div>
        <div className={styles.emojis}>
            {emojis.list.map((type, i) => <EmojiButton key={i} type={type} id={id} />)}
        </div>
    </div>
}

export default React.memo(DiplomaCard)
