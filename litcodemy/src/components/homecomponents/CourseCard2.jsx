const CourseCard = ({ course }) => {
    return (
      <div className="bg-white rounded-md shadow p-3 border border-gray-100 hover:shadow-md transition text-sm">
        {/* Image: reduce height */}
        <img
          src={course.image}
          alt={course.title}
          className="h-20 w-full object-contain rounded"
        />
  
        {/* Title: tighter spacing */}
        <h3 className="mt-2 font-semibold text-sm text-slate-800">{course.title}</h3>
  
        {/* Description: reduced font and spacing */}
        <p className="mt-1 text-gray-500 text-xs line-clamp-2">{course.description}</p>
  
        {/* Button: tighter */}
        <a
          href={`/courses/${course.id}`}
          className="mt-2 inline-block bg-emerald-500 hover:bg-emerald-600 text-white py-1 px-3 rounded text-xs"
        >
          Get Started
        </a>
      </div>
    );
  };
  
  export default CourseCard;
  