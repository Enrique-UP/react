import { useState, useEffect } from 'react';

function Exp1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return(
    <>
      <aside>
        <h2>Exp 1</h2>
        <p>{count}</p>
      </aside>
    </>
  );
}

export default Exp1;