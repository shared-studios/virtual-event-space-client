import React, { useEffect } from 'react';
import styles from './styles.module.css'
import Loading from '../loading'
import { authorizeUser } from '../actions/authorize'
import { useDispatch, useSelector } from "react-redux"

const Authentication = (props) => {
    const { eventId, userId } = props
    const dispatch = useDispatch()
    const { authenticated, loading, message } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(authorizeUser(eventId, userId))
        console.log('Authentication')
    }, [dispatch, eventId, userId])

    return <>{loading ? <Loading /> : authenticated ? props.children : <p className={styles.message}>{message}</p>}</>
}

export default React.memo(Authentication)
