import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { catchError } from "rxjs/operators";
import logger from 'redux-logger';

export const history = createBrowserHistory();

const reducers = combineReducers({
    router: connectRouter(history),
});

const rootEpic = (action$, store$, dependencies) =>
    combineEpics()(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            return source;
        })
    );

const epicMiddleware = createEpicMiddleware();
const middleware = [routerMiddleware(history), epicMiddleware, logger];


const store = configureStore({
    reducer: reducers,
    middleware: middleware,
});
export default store;

epicMiddleware.run(rootEpic);