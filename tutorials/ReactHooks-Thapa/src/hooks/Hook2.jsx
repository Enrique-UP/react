import React, { useState, useEffect } from "react";
import Hook2_1 from "./Hook2_1";
import Hook2_2 from "./Hook2_2";
import Hook2_3 from "./Hook2_3";

export default function Hook2() {
  const [count, setCount] = useState(0);

  const countUpdate = (val) => {
    if (val === "inc") return setCount(count + 1);
    if (val === "dec") return setCount(count - 1);
  };

  useEffect(() => {
    document.title = count;
  });

  return (
    <>
      <section>
        <h1>useEffect Hook</h1>
        <p className="hook1">
          <button onClick={() => countUpdate("inc")}>+</button>
          <span>{count}</span>
          <button onClick={() => countUpdate("dec")}>-</button>
        </p>
      </section>
      <Hook2_1 />
      <Hook2_2 />
      <Hook2_3 />
    </>
  );
}