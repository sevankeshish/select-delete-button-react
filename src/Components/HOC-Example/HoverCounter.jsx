// import WithCount from "./WithCount";

// const HoverCounter = ({ count, incrementCount }) => {
//   return <h2 onMouseOver={incrementCount}>hover : {count} times</h2>;
// };

// export default WithCount(HoverCounter, 5);
import { useState } from "react";
import WithCount from "./WithCount";

const HoverCounter = ({ count, onChange }) => {
  return <h2 onMouseOver={() => onChange()}>hover : {count} times</h2>;
};

export default WithCount(HoverCounter, 15);
