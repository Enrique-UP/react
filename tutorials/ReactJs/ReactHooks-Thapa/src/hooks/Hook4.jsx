import { useReducer } from "react";
import reducer from "./Hook4_1";
import Hook4_2 from "./Hook4_2";

const initialValue = 0;

export default function Hooks4() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <section>
        <h1>useReducer Hook</h1>
        <p><b>By if condition</b></p>
        <p className="hook1">
          <button onClick={() => dispatch({type:"INC"})}>+</button>
          <span>{count}</span>
          <button onClick={() => dispatch({type:"DEC"})}>-</button>
        </p>
      </section>
      <Hook4_2 />
    </>
  );
}
