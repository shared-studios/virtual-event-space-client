import React from 'react'
import styles from './styles.module.css'
import GraduateCard from '../graduate-card'
import { useSelector } from 'react-redux'
import { useTransition, animated } from 'react-spring'

const GraduatesList = () => {
    const image_link = useSelector(({ event }) => event.image_link)
    const graduates = useSelector(({ graduates }) => Object.values(graduates).reverse())
    const transitions = useTransition(graduates, item => item.id, {
        from: { opacity: 0, height: '0px', transform: 'translateY(-100%)' },
        enter: { opacity: 1, height: '126px', transform: 'translateY(0%)' },
        leave: { opacity: 0, height: '0px', transform: 'translateY(-100%)' }
    })

    return <div className={styles.graduates_list}>
        {graduates.length > 0 && <p className={styles.title}>Send Reactions to your Graduate</p>}
        {transitions.map(({ item, key, props }) => {
            return item && <animated.div key={key} style={props} className={styles.diploma_card}>
                <GraduateCard  {...item} image_link={image_link} />
            </animated.div>
        })}
    </div>
}

export default React.memo(GraduatesList)
