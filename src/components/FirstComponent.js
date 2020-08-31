import React from "react";

const FirstComponent = props => {
  console.log("props", props);
  return (
    <div>
      <p>Hey from a different component</p>
      <h2 style={{ color: props.person ? "blue" : "red" }}>
        I am {props.person}
      </h2>
    </div>
  );
};

export default FirstComponent;
