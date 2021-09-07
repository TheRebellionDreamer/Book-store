import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers/rootReducer.reducer";
import thunk from "redux-thunk"

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
