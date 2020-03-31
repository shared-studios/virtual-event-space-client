import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import store from "./components/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>boiler plate</div>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))