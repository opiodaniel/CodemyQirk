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
    <section id="courses" className="py-6 bg-gray-50">
    <div className="max-w-6xl mx-auto px-3">
      <h2 className="text-xl font-semibold text-center mb-4 text-green-800">Available Courses</h2>

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