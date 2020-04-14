import { useEffect } from 'react'
import moment from 'moment'
import jwt from 'jsonwebtoken'
import { fetchUser } from '../actions/user-fetch'
import { useDispatch, useSelector } from "react-redux"

const useAuthentication = (event_id, user_id) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('is signed in: ', user.signed_in)

        if (user.signed_in && user.token && jwt.decode(user.token)) {
            const expiry = jwt.decode(user.token).exp;
            const now = new Date();
            const hasTokenExpired = now.getTime() > expiry * 1000;
            if (hasTokenExpired) {
                console.log('token expired. Need to refresh token')
                dispatch(fetchUser(event_id, user_id))
            } else {
                dispatch({ type: "AUTHENTICATED", payload: true })
                console.log('token is still valid until:', moment.unix(expiry).format('lll'))
            }
        } else {
            console.log("not sign is. Need to sign in")
            dispatch(fetchUser(event_id, user_id))
        }

    }, [dispatch, user.signed_in, user.token, event_id, user_id])

    return user
}

export default useAuthentication
