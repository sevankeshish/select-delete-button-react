import { useRef, useEffect, useState } from "react";

export const UseRefExample = () => {
  const [inputValue, setInputValue] = useState("");
  const previousValue = useRef();

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    previousValue.current = inputValue;
    // console.log("ejra", previousValue);
  }, [inputValue]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <p>
        my name is {inputValue} but it used to be {previousValue.current}
      </p>
    </div>
  );
};
