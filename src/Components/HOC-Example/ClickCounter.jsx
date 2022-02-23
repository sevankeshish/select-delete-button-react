import { useState } from "react";

export const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2 onClick={incrementCount}>count : {count} times</h2>
    </div>
  );
};
