import { useContext } from "react";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const State = () => {
  // 管理者フラグ
  // const [isAdmin, setIsAdmin] = useState(0);
  const [isAdmin, setIsAdmin] = useContext(AdminFlagContext);

  // [切り替え]押下時
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {/* 管理者フラグによって処理を分ける */}
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card />
    </div>
  );
};
