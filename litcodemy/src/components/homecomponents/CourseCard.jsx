import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
      {/* Badge */}
      {course.isNew && (
        <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">New</span>
      )}

      {/* Category Tag */}
      <span className="text-xs font-semibold text-green-600 border border-green-500 px-2 py-0.5 rounded">{course.categoryType}</span>

      {/* Image */}
      {course.courseImg && (
        <img src={course.courseImg} alt={course.title} className="w-full h-28 object-cover rounded mb-2" />
      )}

      {/* Title & Description */}
      <h3 className="font-bold text-lg text-green-900">{course.title}</h3>
      <p className="text-green-800 text-sm mt-2 mb-3 line-clamp-2">{course.description}</p>

      {/* Stats Row */}
      <div className="flex justify-center gap-4 text-xs text-green-800 font-medium mb-4">
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h8v-7a4 4 0 0 0 4-4z" />
          </svg>
          <span>{course.upvotes} Upvotes</span>
        </div>
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span>{course.comments} Comments</span>
        </div>
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span>{course.studentsEnrolled} Enrolled</span>
        </div>
      </div>

      {/* Button */}
      <button className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition-all">
        Get Started
      </button>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default CourseCard;