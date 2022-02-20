import { useState } from "react";
import { useEffect } from "react";

export const FunctionalCounter = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("document title updating");
    document.title = `clicked : ${count} times`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count : {count}</button>
      <input
        type="text"
        value={name}
        onChange={(text) => setName(text.target.value)}
      ></input>
    </div>
  );
};
