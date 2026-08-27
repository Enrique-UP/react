import { useEffect, useLayoutEffect, useState } from "react";

export default function Hook6_1() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    if (num === 0) setNum(num + Math.random() * 100);
  }, [num]);
  return (
    <>
      <section>        
        <p>My new random number is {num}</p>
        <p>Data update on screen then show first 0 after that show random number.</p>
        <button onClick={() => setNum(0)}>Random Number</button>
      </section>
    </>
  );
}
