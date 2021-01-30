import React, { useReducer } from "react";
import reducer from "./reducers";
import { increaseCount, decreaseCount } from "./actionsGenerator";

function ReducerEx() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increase = function () {
    dispatch(increaseCount());
  };
  const decrease = function () {
    dispatch(decreaseCount());
  };
  return (
    <div>
      <p>{state.count}</p>
      <div>
        <button onClick={increase}> increase by one </button>
        <button onClick={decrease}> decrease by one </button>
      </div>
    </div>
  );
}

export default ReducerEx;
