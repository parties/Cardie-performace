import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App} from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import {Provider} from "react-redux";

function Wrapper() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

const render = () => ReactDOM.render(<Wrapper />, document.getElementById("root"));

render();
// store.subscribe(render);
registerServiceWorker();
