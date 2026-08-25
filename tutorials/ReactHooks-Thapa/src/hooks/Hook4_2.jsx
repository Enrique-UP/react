import { useReducer } from "react";
import reducer from "./Hook4_3";

const initialValue = 0;

export default function Hook4_2() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <section>
        <p><b>By switch condition</b></p>
        <p className="hook1">
          <button onClick={() => dispatch({type:"INC"})}>+</button>
          <span>{count}</span>
          <button onClick={() => dispatch({type:"DEC"})}>-</button>
        </p>
      </section>
    </>
  );
}
