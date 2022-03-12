// import { useState } from "react";
// import WithCount from "./WithCount";

// const ClickCounter = ({ count, incrementCount, name }) => {
//   console.log(name);
//   return (
//     <div>
//       <button onClick={incrementCount}>clicked {count} times</button>
//     </div>
//   );
// };

// export default WithCount(ClickCounter, 10);
import { useState } from "react";
import WithCount from "./WithCount";
const ClickCounter = ({ onChange, count, name }) => {
  console.log(name);
  return <button onClick={onChange}>count : {count} times</button>;
};

export default WithCount(ClickCounter, 5);
