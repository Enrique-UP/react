import React, {useState, useEffect, useRef} from "react";
import Hook5_1 from "./Hook5_1";

export default function Hook5() {
  const [userInput, setUserInput] = useState("");
  const count  = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <>
      <section>
        <h1>useRef Hook</h1>
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <p>The number of times comp render: {count.current}</p>
      </section>
      <Hook5_1 />
    </>
  );
}
