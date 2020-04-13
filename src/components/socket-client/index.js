export default class Socket {
    constructor(url) {
        this.socket = new WebSocket(url)
        this.socket.onmessage = (event) => {
            console.log(event)
        }
        this.connected = false
    }

    onConnect = (call_back) => this.socket.onopen = (event) => {
        this.connected = true
        call_back(event)
    }

    onDisconnect = (call_back) => this.socket.onclose = (event) => {
        this.connected = false
        call_back(event)
    }

    onError = (call_back) => this.socket.onerror = (event) => call_back(event)

    on = (action, call_back) => {
        this.socket.onmessage = (event) => {
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

    send = (action, data, call_back) => {
        if (call_back) {
            data.call_back = `${action}callback`
            this.on(data.call_back, call_back)
        }
        this.socket.send(JSON.stringify({ action, data }))
    }
}