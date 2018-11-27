import { createStore } from "redux";

const incrementCount = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) =>({
    type:'DECREMENT',
    decrementBy
}); 

const setCount = ({ count }) => ({
    type:'SET',
    count
});

const resetCount = () =>({
    type: 'RESET'
});

//Reducer
//1. Reducer are pure functions
//2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    if (action.type === "INCREMENT") {
      return {
        count: state.count + action.incrementBy
      };
    }
    if (action.type === "DECREMENT") {
      return {
        count: state.count - action.decrementBy
      };
    }
    if (action.type === "RESET") {
      return {
        count: 0
      };
    }
    if (action.type === "SET") {
      return {
        count: action.count
      };
    } else {
      return state;
    }
  };

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount( {incrementBy: 5} ));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 49}));

store.dispatch(setCount({count: 101}));