import React, { useState, useMemo } from "react";

export default function Hook7() {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log("🚀 ~ file: Memo.jsx ~ line 12 ~ countNumber ~ num", num);
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };

  const CheckData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);

  return (
    <>
      <section>
        <h1>useMemo Hook</h1>
        <button onClick={getValue} style={{ backgroundColor: "red" }}>Counter</button>
        <p>My new number : {CheckData}</p>
        <button onClick={() => setShow(!show)}>{show ? "You clicked me" : "Click me plz"}</button>
      </section>
    </>
  );
};