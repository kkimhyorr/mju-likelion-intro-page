import Aboutme from "./Aboutme";
import data from "./Data.json";
import Home from "./Home";
import Qna from "./Qna";

import Header from "../components/Header";

import React, { useState } from "react";

const Main = () => {
  const [page, setPage] = useState("home");

  switch (page) {
    case "home":
      return (
        <>
          <Header setPage={setPage} />
          <Home />
        </>
      );
    case "aboutme":
      return (
        <>
          <Header setPage={setPage} />
          <Aboutme data={data} />
        </>
      );
    case "qna":
      return (
        <>
          <Header setPage={setPage} />
          <Qna />
        </>
      );
    default:
      break;
  }
  return (
    <>
      <p>잘못된 페이지입니다.</p>
    </>
  );
};

export default Main;
