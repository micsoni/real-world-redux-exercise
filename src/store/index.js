import { createStore } from "redux";
import reducer from "./rootReducer";
//import ReduxThunk from "redux-thunk";

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, enhancer);
export default store;
