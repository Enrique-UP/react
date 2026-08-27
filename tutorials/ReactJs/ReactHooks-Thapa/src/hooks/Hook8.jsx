// The React useCallback Hook returns a memoized callback function.

import { useCallback, useState } from "react";
import Todos from "./Todos";

const Hook8 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    return setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  return (
    <section>
      <h1>callBack Hook</h1>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </section>
  );
};

export default Hook8;