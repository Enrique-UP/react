import { useEffect, useLayoutEffect } from "react";
import Hook6_1 from "./Hook6_1";
import Hook6_2 from "./Hook6_2";

export default function Hook6() {
  useEffect(() => {
    console.log("I am first effect.");
  }, []);

  useLayoutEffect(() => {
    console.log("I am second effect.");
  }, []);

  useEffect(() => {
    console.log("I am third effect.");
  }, []);
  
  return (
    <>
      <section>
        <h1>useLayoutEffect Hook</h1>
        <Hook6_1 />
        <Hook6_2 />
      </section>
    </>
  );
}
