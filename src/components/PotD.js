import React from "react";

const PotD = (props) => {
  //   if (!props.photd) return <h3>Loading...</h3>;

  return (
    <>
      {!props.photd && !props.title && !props.explanation ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div>
            <h4>{props.title}</h4>
          </div>
          <div>
            <img src={props.photd} alt={props.title} />
          </div>
          <div>
            <p>{props.explanation}</p>
          </div>
        </>
      )}
    </>
  );
};

export default PotD;
