import { memo, useState } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const Parent = memo (() => {
  console.log("Parentレンダリング");

  const [num, serNum] = useState(0);

  const onClickButton = () => {
    serNum(num + 1);
  };

  const onClickReset = () => {
    serNum(0);
  };

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      {/* <Child1 /> */}
      {/* Propsとして関数を設定 */}
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});
