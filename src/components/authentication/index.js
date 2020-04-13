import { useEffect } from 'react';
import axios from 'axios'
import moment from 'moment'
import jwt from 'jsonwebtoken'
import { useDispatch, useSelector } from "react-redux"
import Socket from '../socket-client'

const useAuthentication = (event_id, user_id) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('is signed in: ', user.signed_in)

        const signIn = () => {
            axios.get(`https://auhb4v0d92.execute-api.us-east-2.amazonaws.com/user/${event_id}/${user_id}`)
                .then((res) => {
                    console.log("sign in success")
                    localStorage.setItem('storage', JSON.stringify(res.data))
                    dispatch({ type: "SIGNED-IN", payload: res.data })
                }).catch((error) => {
                    console.log("sign in error")
                    console.log(error)
                })
        }

        if (user.signed_in && user.token && jwt.decode(user.token)) {
            const expiry = jwt.decode(user.token).exp;
            const now = new Date();
            const hasTokenExpired = now.getTime() > expiry * 1000;
            if (hasTokenExpired) {
                console.log('token expired. Need to refresh token')
                signIn()
            } else {
                const URL = `wss://jkj5m702p9.execute-api.us-east-2.amazonaws.com/dev?event_id=${event_id}&user_id=${user_id}`
                const socket = new Socket(URL)
                socket.onConnect((event) => {
                    console.log(event)
                })
                dispatch({ type: "AUTHENTICATED", payload: true })
                console.log('token is still valid until:', moment.unix(expiry).format('lll'))
            }
        } else {
            console.log("not sign is. Need to sign in")
            signIn()
        }

    }, [dispatch, user.signed_in, user.token, event_id, user_id])

    return { ...user }
}

export default useAuthentication
