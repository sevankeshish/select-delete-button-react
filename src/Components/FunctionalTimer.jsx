import { useState } from "react";
import { useEffect } from "react";

export const FunctionalTimer = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("functional update");
      setcount({ count: count + 1 });
      //   setcount(count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <div>this is timer</div>;
};
