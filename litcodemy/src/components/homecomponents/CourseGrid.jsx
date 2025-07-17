import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: "Python",
    description: "This course introduces Python programming, focusing on basics such as variables, data types, control structures, and functions.",
    categoryType: "LANGUAGE",
    courseImg: "/images/python.jpg",
    upvotes: 12,
    comments: 5,
    studentsEnrolled: 300,
  },
  {
    id: 1,
    title: "Python",
    description: "This course introduces Python programming, focusing on basics such as variables, data types, control structures, and functions.",
    categoryType: "LANGUAGE",
    courseImg: "/images/python.jpg",
    upvotes: 12,
    comments: 5,
    studentsEnrolled: 300,
  },
  {
    id: 1,
    title: "Python",
    description: "This course introduces Python programming, focusing on basics such as variables, data types, control structures, and functions.",
    categoryType: "LANGUAGE",
    courseImg: "/images/python.jpg",
    upvotes: 12,
    comments: 5,
    studentsEnrolled: 300,
  },
  {
    id: 1,
    title: "Python",
    description: "This course introduces Python programming, focusing on basics such as variables, data types, control structures, and functions.",
    categoryType: "LANGUAGE",
    courseImg: "/images/python.jpg",
    upvotes: 12,
    comments: 5,
    studentsEnrolled: 300,
  },
  
];

const CourseGrid = () => {
  return (
    <div className="px-6 max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mb-5">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseGrid;