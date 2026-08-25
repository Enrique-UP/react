import React from "react";
import Child from "./Child";
import { AppProvider } from "./userContext";

const Parent = () => {
  return (
    <AppProvider>
      <section>
        <h1>Custom Hook Parent Comp</h1>
        <Child />
      </section>
    </AppProvider>
  );
};

export default Parent;