import React, { useState } from "react";

export const Array = () => {
  //   const [data, setdata] = useState();

  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const r = [7, 8, 9];

  const c = `salam ${a}`;
  const d = [];
  const e = [a + b];
  //   console.log("asdasdasda", e);
  //   console.log(a);

  //   d.push(a);
  //   d.push(b);
  //   console.log("aaaa", d);
  const q = a.concat(b, r);
  console.log("hello", q);
};
