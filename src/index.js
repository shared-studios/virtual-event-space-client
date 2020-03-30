import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Authentication from './components/authentication'
import { Provider } from "react-redux";
import store from "./components/store";
import LandingPage from "./components/landing-page/landing-page";
import WebSocket from "./components/web-socket";

const App = () => {
  return (
    <React.StrictMode>
      {/* <Provider store={store}>
        <Authentication >
          <WebSocket>
            <LandingPage />
          </WebSocket>
        </Authentication>
      </Provider> */}
      <iframe title="test" allow="microphone; camera" src="https://zoom.us/wc/334686712/join?prefer/join?prefer=1&un=Siam " frameborder="0"></iframe>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))