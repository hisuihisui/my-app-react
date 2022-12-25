import { memo, useState } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";
import { useCallback } from "react";

export const Parent = memo (() => {
  console.log("Parentレンダリング");

  const [num, serNum] = useState(0);

  const onClickButton = () => {
    serNum(num + 1);
  };

  // 関数が再生成され、子コンポーネントが再レンダリングされないようにする
  // 子コンポーネントに渡す関数はuseCallbackを使っておく
  // 関数内で使用してる変数を依存配列に設定するのを忘れない
  // const onClickReset = () => {
  //   serNum(0);
  // };
  const onClickReset = useCallback(() => {
    serNum(0);
  }, []);

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
