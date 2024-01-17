const Language = (props) => {
  const { title, content } = props.data;

  return (
    <>
      <div>
        {title} : {content}
      </div>
    </>
  );
};

export default Language;
