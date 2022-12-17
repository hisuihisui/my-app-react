import ReactDOM from "react-dom";
import { Fragment } from "react";

const App = () => {
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

  // Fragmentで囲む
  return (
    <Fragment>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
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

ReactDOM.render(<App />, document.getElementById("root"));
