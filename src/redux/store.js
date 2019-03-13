import { createStore ,applyMiddleware} from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import reducers from "./reducers";

// const store = createStore(reducers);
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);
const store = createStore(
    reducers,
    applyMiddleware(middleware)
  );
export default store;