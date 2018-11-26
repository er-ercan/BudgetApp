import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1
    };
  }
  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1
    };
  }
  if (action.type === "RESET") {
    return {
      count: 0
    };
  } else {
    return state;
  }
});

console.log(store.getState());

// I would like to increment count
store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "RESET"
});
store.dispatch({
  type: "DECREMENT"
});
store.dispatch({
  type: "DECREMENT"
});

console.log(store.getState());
