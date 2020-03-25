import React, { useEffect } from 'react'
import { useSelector } from "react-redux"

const LandingPage = () => {
    const socket = useSelector(state => state.socket)
    const user = useSelector(state => state.user)

    // useEffect(() => {
    // }, [socket, user.token.access_token])

    return (
        <React.Fragment>
            {console.log('LandingPage')}
            <div>landing page</div>
        </React.Fragment>
    )
}

export default React.memo(LandingPage)