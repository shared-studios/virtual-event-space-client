import React, { useEffect } from 'react';
import axios from 'axios'
import moment from 'moment'
import jwt from 'jsonwebtoken'
import { useDispatch, useSelector } from "react-redux"

const Authentication = (props) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('is signed in: ', user.signed_in)
        if (user.signed_in) {
            const { access_token } = user.token
            if (access_token && jwt.decode(access_token)) {
                const expiry = jwt.decode(access_token).exp;
                const now = new Date();
                const hasTokenExpired = now.getTime() > expiry * 1000;
                if (hasTokenExpired) {
                    console.log('token expired. Need to refresh token')
                    signIn()
                } else {
                    dispatch({ type: "AUTHENTICATED", payload: true })
                    console.log('token is still valid until:', moment.unix(expiry).format('lll'))
                }
            }
        } else {
            console.log("not sign is. Need to sign in")
            signIn()
        }
    }, [dispatch, user.signed_in, user.token])

    const signIn = () => {
        const href = window.location.href.split('?')[0]
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code')
        if (code) {
            axios.get(`http://localhost:5000/authenticate?redirect_uri=${href}&code=${code}`)
                .then((res) => {
                    console.log("sign in success")
                    localStorage.setItem('token', JSON.stringify(res.data))
                    console.log(res.data.tokens)
                    window.location.replace(href)
                }).catch((error) => {
                    console.log("sign in error")
                    console.log(error)
                })
        } else {
            window.location.replace(`http://localhost:5000/authenticate?redirect_uri=${href}`)
        }
    }

    return (
        <React.Fragment>
            {console.log('Authentication')}
            {user.authenticated ? props.children : <div>Log in</div>}
        </React.Fragment>
    )
}

export default React.memo(Authentication)
