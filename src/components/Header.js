import { React, useContext } from "react";
import { darkModeContext } from "../App";
import "../pages/Main.css";

const Header = (props) => {
  const [isDark, setIsDark] = useContext(darkModeContext);

  return (
    <>
      <button
        className={isDark ? "dark" : ""}
        onClick={() => props.setPage("home")}
      >
        Home
      </button>
      <button onClick={() => props.setPage("aboutme")}>Aboutme</button>
      <button onClick={() => props.setPage("qna")}>QnA</button>
    </>
  );
};

export default Header;
