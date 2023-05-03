import Introduction from "./Introduction";
import data from "./Data.json";
import img from "./profile.jpg";
import Character from "./Character";
import LanguageList from "./LanguageList";

const Aboutme = (props) => {
  return (
    <>
      <h1>About 김효리</h1>
      <h2>!(•̀ᴗ•́)و ̑̑</h2>
      <h5>for LIKE LION 🐯</h5>
      <h4>↓ 아래를 클릭하면 이동합니다 ↓</h4>
      <ul>
        <li>
          <a href="#introduction">Introduction</a>
        </li>

        <li>
          <a href="#character">Character</a>
        </li>

        <li>
          <a href="#availableLanguage">AvailableLanguage</a>
        </li>
      </ul>
      <img src={img} width="300"></img>
      <Introduction data={data} />
      <br />
      <br />
      <br />
      <Character />
      <LanguageList data={props.data} />
    </>
  );
};

export default Aboutme;
