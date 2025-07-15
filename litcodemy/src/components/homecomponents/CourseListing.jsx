import { useState } from 'react';
import CourseCard from './CourseCard';

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

const categories = ["All", "Web", "Data", "Design", "Marketing", "Mobile", "Cloud"];

const CourseListing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-8 bg-gray-50 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-emerald-900 text-center mb-8">
          Explore Our Courses
        </h2>

        {/* 🔍 Search and Filters */}
       {/* 🔍 Search and Category Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between mb-10">

            {/* 🔍 Search Input with Icon */}
            <div className="relative w-full md:w-1/2">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
                />
                </svg>
            </span>
            <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            </div>

            {/* 🏷️ Category Filters */}
            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
            {categories.map((cat) => (
                <button
                key={cat}
                className={`px-4 py-1.5 text-sm rounded-full border transition ${
                    selectedCategory === cat
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(cat)}
                >
                {cat}
                </button>
            ))}
            </div>
        </div>


        {/* 🧱 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No courses found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseListing;
