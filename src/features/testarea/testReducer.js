import { actionTypes } from "redux-form";
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstats";
import { createReducter } from "../../app/common/uitl/reducerUtils";

const initialState = {
  data: 42
};

const incrementCounter = (state) => {
  return {...state, data: state.data + 1};
}

const decrementCounter = (state) => {
  return {...state, data: state.data - 1};
}


export default createReducter(initialState, {
    [INCREMENT_COUNTER]: incrementCounter,
    [DECREMENT_COUNTER]: decrementCounter
});