import React, { useRef } from "react";
import { useState } from "react";
import Button from "./Button";
import CourseCart from "./CourseCart";

const CoursePlanner = () => {
  const [courseData, setterCourseData] = useState([]);
  const nameRef = useRef()
  const hoursRef = useRef()

  const onClickHandler = () => {
    // Extract the value of course name
    const courseName = nameRef.current.value;

    // Extract the value of hours
    const courseHour = hoursRef.current.value;

    //Approach 1
    {
      // create a object out of it
      // const newCourseData = {
      //   name: courseName,
      //   hour: courseHour,
      // };
      // const dataToUpdate = [...courseData, newCourseData]; // [1, 2]
      // setterCourseData(dataToUpdate);
    }

    // inside courseData push the object created above
    // const data = JSON.parse(JSON.stringify(courseData));
    // data.push(newCourseData);
    // setterCourseData(data);

    if (courseName.length === 0 || courseHour.length === 0) {
      alert('Select CourseName and CourseHours')

    } else {
      //Approach 2
      const dataToUpdate = [...courseData,
      {
        name: courseName,
        hour: courseHour,
      },
      ];
      setterCourseData(dataToUpdate);
      nameRef.current.value = ''
      hoursRef.current.value = ''
    }



  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Geekster Course CoursePlanner</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <input ref={nameRef} type="text" placeholder="Enter Skills" />
          <input ref={hoursRef} type="number" placeholder="Enter Hours" />
          <Button
            onClick={onClickHandler}
            color="#FFFFFF"
            paddingBtn="5px 20px"
            backgroundColor="#22272E"
            borderRadius="8px"
            curserPointer="pointer"
          >
            Add
          </Button>
        </div>
        {courseData.map((course, index) => (
          <CourseCart name={course.name} hour={course.hour} key={index} />
        ))}
      </div>
    </>
  );
};

export default CoursePlanner;
