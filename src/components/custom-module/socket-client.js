export default () => {
    const url = window.config.socket_url
    const socket = new WebSocket(url)

    let connected = false

    const onConnect = (call_back) => socket.onopen = (event) => {
        connected = true
        call_back(event)
    }

    const onDisconnect = (call_back) => socket.onclose = (event) => {
        connected = false
        call_back(event)
    }

    const onError = (call_back) => socket.onerror = (event) => call_back(event)

    const on = (action, call_back) => {
        socket.onmessage = (event) => {
            const { data, action } = JSON.parse(event.data)
            if (action) {
                window.dispatchEvent(new CustomEvent(action, { detail: data }))
            }
        }
        const options = {
            once: (action.includes('callback'))
        }
        window.addEventListener(action, (e) => {
            if (e.detail)
                call_back(e.detail)
        }, options)
    }

    const send = (action, data, call_back) => {
        if (call_back) {
            data.call_back = `${action}callback`
            on(data.call_back, call_back)
        }
        socket.send(JSON.stringify({ action, data }))
    }
    return { send, onError, onDisconnect, onConnect, connected }
}