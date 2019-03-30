import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from "./store";

import "./index.css";
import App from "./App"
import * as serviceWorker from "./serviceWorker";

// TODO Build initial state
const initialState = {
    key: "value",
};

const store = configureStore(initialState);

const app = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(
    app(),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
