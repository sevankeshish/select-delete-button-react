import { useState } from "react";

export const ClickCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count : {count}</button>
    </div>
  );
};
