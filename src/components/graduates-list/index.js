import React from 'react'
import styles from './styles.module.css'
import GraduateCard from '../graduate-card'
import { useSelector } from 'react-redux'
// import { useTransition } from 'react-spring'

const GraduatesList = () => {
    const image_link = useSelector(state => state.event.image_link)
    const graduates = useSelector(state => state.graduates)
    // const transitions = useTransition(graduates, item => item.id)

    return <div className={styles.graduates_list}>
        {graduates[0] && <p className={styles.title}>Send Reactions to your Graduate</p>}
        {Object.values(graduates).reverse().map((graduate) => {
            return <GraduateCard key={graduate.id} {...graduate} image_link={image_link} />
        })}
    </div>
}

export default React.memo(GraduatesList)
