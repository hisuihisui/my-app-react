import { Fragment, useEffect, useState } from "react";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import { TailwindCss } from "./components/TailwindCss";
import { ColoredMessage } from "./components/ColoredMessage";

// 他のファイルで使えるようにexportする
export const App = () => {
  // return <h1>こんにちは！</h1>;

  // ダメな例
  // return以降は1つのタグで囲われている必要がある
  // return (
  //   <h1>こんにちは！</h1>
  //   <p>お元気ですか？</p>
  // );

  // いい例
  // divタグで囲む
  // return (
  //   <div class="">
  //     <h1>こんにちは！</h1>
  //     <p>お元気ですか？</p>
  //   </div>
  // );

  // useState
  const [num, setNum] = useState(0);

  // 初回＋第２引数が変化したときに実行
  // 第２引数を[]とすると初回のみ実行
  useEffect(() => alert(), [num]);

  // ボタンクリック時のアクション定義
  // イベント名：lowerCamelCase
  const onClickButton = () => {
    // alert();
    setNum((prev) => prev + 1);
  };

  // const contentPinkStyle = {
  //   color: "pink",
  //   fontSize: "20px",
  // };

  // Fragmentで囲む
  return (
    <Fragment>
      {/* HTMLタグの中で{}でJSを記述可能 */}
      {console.log("TEST")}
      {/* JavaScriptのオブジェクトとしてCSSを定義する */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* Propsを渡してみる */}
      {/* <ColoredMessage color="blue" message="お元気ですか？" /> */}
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      {/* <p style={contentPinkStyle}>元気です</p> */}
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <div></div>
      <div>
        <StyledJsx />
        <StyledComponents />
        <Emotion />
        <TailwindCss />
      </div>
    </Fragment>
  );

  // 空タグで囲む
  // return (
  //   <>
  //     <h1>こんにちは！</h1>
  //     <p>お元気ですか？</p>
  //   </>
  // );
};
