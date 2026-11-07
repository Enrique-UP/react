import {useState} from "react";

function Exp1() {
  const [color, setColor] = useState("red");
  return(
    <>
      <aside>
        <h2>Exp 1</h2>
        <p>{color}</p>
		<p><button type="button" onClick={() => setColor("blue")}>Click Me</button></p>
      </aside>
    </>
  );
}

export default Exp1;