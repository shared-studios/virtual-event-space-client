import { useEffect, useState } from 'react';
import { socket } from '../custom-module'
import { createSocket } from '../actions/socket'
import { useDispatch } from 'react-redux'

const useSocket = () => {
    const dispatch = useDispatch()
    const [connected, setConnection] = useState(false)

    useEffect(() => {
        const ws = socket()
        ws.onConnect((e) => {
            console.log('onConnect:', e)
            dispatch(createSocket(ws))
            setConnection(true)
        })

        ws.onDisconnect((e) => {
            console.log('onDisconnect:', e)
        })

        ws.onError((e) => {
            console.log('onError:', e)
        })

    }, [dispatch])

    return connected
}

export default useSocket
