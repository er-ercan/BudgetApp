import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  if (action.type === "INCREMENT") {
    const incrementBy =
      typeof action.incrementBy === "number" ? action.incrementBy : 1;
    return {
      count: state.count + incrementBy
    };
  }
  if (action.type === "DECREMENT") {
    const decrementBy =
      typeof action.decrementBy === "number" ? action.decrementBy : 1;
    return {
      count: state.count - decrementBy
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
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// I would like to increment count
store.dispatch({
  type: "INCREMENT",
  incrementBy: 5
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
  type: "DECREMENT",
  decrementBy: 10
});
store.dispatch({
  type: "SET",
  count: 101
});
