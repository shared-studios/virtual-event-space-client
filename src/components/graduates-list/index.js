import React from 'react'
import styles from './styles.module.css'
import GraduateCard from '../graduate-card'
import { useSelector } from 'react-redux'
// import { useTransition } from 'react-spring'

const GraduatesList = () => {
    const graduates = useSelector(state => state.graduates)
    // const transitions = useTransition(graduates, item => item.id)

    return <div className={styles.graduates_list}>
        {graduates[0] && <p className={styles.title}>Send Reactions to your Graduate</p>}
        {Object.values(graduates).reverse().map((graduate) => <GraduateCard key={graduate.id} {...graduate} />)}
    </div>
}

export default React.memo(GraduatesList)
