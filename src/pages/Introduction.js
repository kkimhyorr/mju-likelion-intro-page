const Introduction = (props) => {
  const {
    Name,
    Age,
    Major,
    Student_ID,
    Habitat,
    AnAnimalResembling,
    MBTI,
    InstagramID,
    Blog,
  } = props.data;

  return (
    <div id="introduction">
      <p>Name : {Name}</p>
      <p>Age : {Age}</p>
      <p>Major : {Major}</p>
      <p>Student ID : {Student_ID}</p>
      <p>Habitat :{Habitat}</p>
      <p>An animal resembling : {AnAnimalResembling}</p>
      <p>MBTI : {MBTI}</p>
      <a href="https://www.instagram.com/kkimhyorr/" target="_blank">
        Instagram ID : {InstagramID}
        <br />
        <br />
      </a>
      <a href="https://blog.naver.com/hyorie03" target="_blank">
        Blog : {Blog}
      </a>
    </div>
  );
};

export default Introduction;
