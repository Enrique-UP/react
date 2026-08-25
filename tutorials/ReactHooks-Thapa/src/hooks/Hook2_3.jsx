import React, { useState, useEffect } from "react";

export default function Hook2_3() {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const currentScreenWidth = () => {
    setWidthCount(() => window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);
    return () => {
      window.removeEventListener("resize", currentScreenWidth);
    };
  });

  return (
    <>
      <section>
        <p className="hook1">
          Please resize the window. The size of the window is {widthCount}.
        </p>
        <p>Check in chorome = select Eements = Event Listeners will be show on right side.</p>
      </section>
    </>
  );
}