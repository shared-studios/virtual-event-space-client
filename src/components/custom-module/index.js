import authentication from './authentication'
import axios from './axios'
import socket from './socket-client'

const configure = (obj) => {
    window.config = { ...window.config, ...obj }
}

export default configure

export { authentication, axios, socket }



















// const Authentication = ({ children, eventId, userId }) => {
//     const storage = localStorage.getItem('storage')
//     const state = JSON.parse(storage) || {}
//     const [authState, setAuthState] = useState({
//         ...state,
//         authenticated: false,
//         signed_in: state.token ? true : false
//     })

//     useEffect(() => {
//         console.log('is signed in: ', authState.signed_in)

//         const signIn = () => {
//             axios.get(`user/${eventId}/${userId}`)
//                 .then((res) => {
//                     console.log("sign in success")
//                     localStorage.setItem('storage', JSON.stringify(res.data))
//                     setAuthState((prevState) => {
//                         return { ...prevState, authenticated: true }
//                     })
//                 }).catch((error) => {
//                     console.log("sign in error")
//                     console.log(error.response)
//                 })
//         }

//         if (authState.signed_in && authState.token && jwt.decode(authState.token)) {
//             const expiry = jwt.decode(authState.token).exp;
//             const now = new Date();
//             const hasTokenExpired = now.getTime() > expiry * 1000;
//             if (hasTokenExpired) {
//                 console.log('token expired. Need to refresh token')
//                 signIn()
//             } else {
//                 configure({ token: authState.token })
//                 setAuthState((prevState) => {
//                     return { ...prevState, authenticated: true }
//                 })
//                 console.log('token is still valid until:', moment.unix(expiry).format('lll'))
//             }
//         } else {
//             console.log("not sign is. Need to sign in")
//             signIn()
//         }

//     }, [authState.signed_in, authState.token, eventId, userId])

//     return (
//         <React.Fragment>
//             {authState.authenticated && children}
//         </React.Fragment>
//     )
// }