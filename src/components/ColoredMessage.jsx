import React from "react";

// 引数で展開
// export const ColoredMessage = ({color, children}) => {
export const ColoredMessage = (props) => {
  console.log(props); // {color: 'blue', message: 'お元気ですか？'}

  // propsの分割代入
  const {color, children} = props

  // CSSオブジェクト
  const contentStyle = {
    color,
    // プロパティ名にハイフンは使えないため、lowerCamelCaseになる
    // 例：font-size → fontSize
    fontSize: "20px",
  };

  // return <p style={contentStyle}>{props.message}</p>;
  return <p style={contentStyle}>{children}</p>;
};
