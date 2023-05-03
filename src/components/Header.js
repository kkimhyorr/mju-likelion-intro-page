import { React, useContext } from "react";
import { darkModeContext } from "../App";
import "../App.css";

const Header = (props) => {
  const { isDark, setIsDark } = useContext(darkModeContext);

  return (
    <>
      <button
        className={isDark ? "dark" : ""}
        onClick={() => setIsDark(!isDark)}
      >
        Darkmode
      </button>
      <button
        className={isDark ? "dark" : ""}
        onClick={() => props.setPage("home")}
      >
        Home
      </button>
      <button
        className={isDark ? "dark" : ""}
        onClick={() => props.setPage("aboutme")}
      >
        Aboutme
      </button>
      <button
        className={isDark ? "dark" : ""}
        onClick={() => props.setPage("qna")}
      >
        QnA
      </button>
    </>
  );
};

export default Header;
