import { createBrowserHistory } from "history";
import {
    applyMiddleware,
    createStore,
} from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const history = createBrowserHistory();

const configureStore = initialState => {
    return createStore(
        createRootReducer(history),
        initialState,
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                thunk,
                logger,
            ),
        ),
    );
};

export default configureStore;
