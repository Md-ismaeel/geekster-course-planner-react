import React, { useState } from "react";
import Button from "./Button";

const CourseCart = ({ name, hour, key }) => {
  const [hourValue, updateHourValue] = useState(Number(hour));

  return (
    <div
      style={{
        boxShadow: "inset 0 0 10px #000000",
        display: "inline-block",
        padding: "10px",
        margin: "10px",
        backgroundColor: "lightBlue",
        color: "white",
      }}
      key={key}
    >
      <p>Course Name : {name}</p>
      <p>Course Hour : {hourValue}</p>
      <div>
        <Button
          width="4rem"
          height="2re"
          onClick={() => {
            updateHourValue(hourValue + 1);
          }}
        >
          +
        </Button>
        <Button
          width="4rem"
          height="2re"
          marginLeft="5px"
          onClick={() => {
            updateHourValue(hourValue - 1);
          }}
        >
          -
        </Button>
      </div>
    </div>
  );
};

export default CourseCart;
