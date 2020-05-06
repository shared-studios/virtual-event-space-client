import React, { useEffect } from 'react';
import styles from './styles.module.css'
import Loading from '../loading'
import { Route } from "react-router-dom"
import { authorizeUser } from '../actions/authorize'
import { useDispatch, useSelector } from "react-redux"

const Authentication = ({ component: Component, ...rest }) => {
    const { event_id, user_id } = rest.computedMatch.params
    const dispatch = useDispatch()
    const { authenticated, loading, message } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(authorizeUser(event_id, user_id))
    }, [dispatch, event_id, user_id])

    return <Route {...rest} render={props => {
        console.log('Authentication')
        if (loading) {
            return <Loading />
        } else if (authenticated) {
            return <Component {...props} />
        } else if (message) {
            return <p className={styles.message}>{message}</p>
        } else {
            return <p className={styles.message}>an unknown error occurred.</p>
        }
    }} />
};

export default React.memo(Authentication)

