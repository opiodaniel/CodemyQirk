import { Link } from 'react-router-dom'; // or use your preferred routing method

const courses = [
  {
    id: 1,
    title: "Intro to Web Development",
    description: "Learn HTML, CSS, and JavaScript from scratch and build real-world projects.",
    instructor: "John Doe",
    image: "/images/web.jpeg",
    category: "Web",
  },
  {
    id: 2,
    title: "Data Science with Python",
    description: "Master data analysis, visualization, and machine learning with Python.",
    instructor: "Jane Smith",
    image: "/images/pydata.jpeg",
    category: "Data",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    description: "Design stunning and user-friendly interfaces using Figma and modern tools.",
    instructor: "Emily Johnson",
    image: "/images/ui-ux.png",
    category: "Design",
  },
  {
    id: 4,
    title: "Digital Marketing Strategies",
    description: "Grow your business with SEO, social media, and content marketing techniques.",
    instructor: "Mark Lee",
    image: "/images/digital.jpg",
    category: "Marketing",
  },
  {
    id: 5,
    title: "Mobile App(React Native)",
    description: "Build cross-platform mobile apps using JavaScript and React Native.",
    instructor: "Sophia Kim",
    image: "/images/mobile.jpg",
    category: "Mobile",
  },
  {
    id: 6,
    title: "Cloud Computing with AWS",
    description: "Deploy scalable cloud solutions using Amazon Web Services (AWS).",
    instructor: "David Brown",
    image: "/images/cloud.png",
    category: "Cloud",
  },
];

const CourseListing = () => {
  return (
    <section id="courses" className="py-4 bg-gray-50">
    <div className="max-w-6xl mx-auto px-3"> 
        <h3 className="text-xl font-semibold mb-3 text-green-800 font-mono ">Available Courses</h3>      
      {/* Unified Search & Filter Bar */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-3">      
        <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search courses..."              
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                 className="absolute left-3 top-2.5 h-5 w-5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
        <select            
          className="w-full sm:w-auto px-4 py-2 rounded-lg border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
        >
          <option value="">All Categories</option>
        </select>
      </div>         

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="gradient-hero bg-white rounded-lg shadow-sm hover:shadow-md transition duration-150"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-24 object-cover rounded-t-lg"
            />

            <div className="p-2">
              <span className="block mb-1 px-1.5 py-0.5 text-[10px] font-medium text-white bg-green-600 rounded">
                {course.category}
              </span>

              <h3 className="text-sm font-semibold mb-1 leading-tight">{course.title}</h3>

              <p className="text-[11px] text-gray-600 mb-1 line-clamp-2">
                {course.description}
              </p>

              <p className="text-[11px] text-gray-700 mb-1">
                <span className="font-medium">By:</span> {course.instructor}
              </p>

              <Link
                to={`/courses/${course.id}`}
                className="text-green-600 text-[11px] font-medium hover:underline"
              >
                View →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  );
};

export default CourseListing;