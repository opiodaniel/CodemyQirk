import React from 'react';

const Pagination = () => {
  const totalPages = 5;

  return (
    <div className="flex justify-center items-center mt-1 mb-10 gap-2 text-sm">
      <button className="px-3 py-1 border rounded disabled:opacity-50">← Prev</button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`px-3 py-1 border rounded ${i === 0 ? 'bg-green-600 text-white' : ''}`}
        >
          {i + 1}
        </button>
      ))}
      <button className="px-3 py-1 border rounded disabled:opacity-50">Next →</button>
    </div>
  );
};

export default Pagination;