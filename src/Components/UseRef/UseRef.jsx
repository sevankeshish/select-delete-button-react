import react from "react";
import { useRef, useEffect, useState } from "react";

export const RefExercise = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const Reset = () => {
    setInputValue("");
    inputRef.current.focus();
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => changeHandler(e)}
      />
      <button onClick={Reset}>Reset</button>
    </div>
  );
};
