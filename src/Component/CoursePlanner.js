import React from "react";
import { useState } from "react";
import Button from "./Button";
import CourseCart from "./CourseCart";

const CoursePlanner = () => {
  const [courseData, setterCourseData] = useState([]);

  const onClickHandler = () => {
    // Extract the value of course name
    const courseName = document.getElementById("course-name").value;

    // Extract the value of hours
    const courseHour = document.getElementById("course-hours").value;

    //Approtch 1
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

    //Approtch 2
    const dataToUpdate = [
      ...courseData,
      {
        name: courseName,
        hour: courseHour,
      },
    ];
    setterCourseData(dataToUpdate);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Geekster Course CoursePlanner</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <input id="course-name" type="text" placeholder="Enter Skills" />
          <input id="course-hours" type="number" placeholder="Enter Hours" />
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
