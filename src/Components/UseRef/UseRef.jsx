import react from "react";
import { useRef, useEffect, useState } from "react";

export const RefExercise = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const previousValue = useRef();
  const [count, setCount] = useState(0);
  const previousCount = useRef();

  // const Reset = () => {
  //   setInputValue("");
  //   inputRef.current.focus();
  // };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
    previousValue.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => changeHandler(e)}
      />
      {/* <button onClick={Reset}>Reset</button> */}
      <p>
        my name is {inputValue}, but it used to be {previousValue.current}
      </p>

      <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>
        Generate
      </button>
      <p>count is : {count}</p>
      <p>previous count is : {previousCount.current}</p>
    </div>
  );
};
