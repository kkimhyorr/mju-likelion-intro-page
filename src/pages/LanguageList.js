import Language from "./Language";

const LanguageList = (props) => {
  return (
    <div id="availableLanguage">
      <h2>Available Language</h2>

      {props.data.AvailableLanguage.map((data, index) => (
        <Language data={data} key={index} />
      ))}
    </div>
  );
};

export default LanguageList;
