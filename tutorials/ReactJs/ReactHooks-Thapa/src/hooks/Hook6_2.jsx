import { useEffect, useLayoutEffect, useState } from "react";

export default function Hook6_2() {
  const [num, setNum] = useState(0);
  useLayoutEffect(() => {
    if (num === 0) setNum(num + Math.random() * 100);
  }, [num]);
  return (
    <>
      <section>        
        <p>My new random number is {num}</p>
        <p>Data update on background then show on screen.</p>
        <button onClick={() => setNum(0)}>Random Number</button>
      </section>
    </>
  );
}
