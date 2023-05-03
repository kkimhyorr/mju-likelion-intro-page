import Main from "./pages/Main";
import Login from "./pages/Login";
import { React, useState, useEffect, createContext } from "react";

import { UserInfo } from "./pages/UserInfo";

export const darkModeContext = createContext(false);

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    localStorage.setItem("UserInfo", JSON.stringify(UserInfo));
  });
  return isLogin ? (
    <div className={isDark ? "darkMode" : ""}>
      <darkModeContext.Provider value={(isDark, setIsDark)}>
        <Main dark={setIsDark} />
      </darkModeContext.Provider>
    </div>
  ) : (
    <Login login={setIsLogin} />
  );
}

export default App;
