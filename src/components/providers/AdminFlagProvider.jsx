import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = (props) => {
  const { children } = props;

  const [isAdmin, setIsAdmin] = useState(false);

  // AdminFlagContextの中にProviderがあるので、childrenを囲む
  // valueの中にグロ-バルに扱う実際の値を設定
  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  );
};
