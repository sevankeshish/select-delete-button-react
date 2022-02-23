import { useState } from "react";

export const HouverCount = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return <button onMouseOver={incrementCount}>hover : {count} times</button>;
};
