import React, {useRef} from "react";

export default function Hook5_1() {
  const inputRef  = useRef();
  const changeBorder = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#8280AA";
  }
  return (
    <>
      <section>
        <input type="text" ref={inputRef} />
        <button onClick={changeBorder}>Submit</button>
      </section>
    </>
  );
}
