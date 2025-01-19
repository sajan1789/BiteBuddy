import React from 'react';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4 ">
      <ul className="flex gap-2">
        {currentPage > 1 && (
          <li>
            <button 
              onClick={() => setCurrentPage(currentPage - 1)} 
              className="px-3 py-1 border rounded-md"
            >
              Previous
            </button>
          </li>
        )}
        {pageNumbers.map(number => (
          <li key={number}>
            <button 
              onClick={() => setCurrentPage(number)} 
              className={`md:px-3 px-2 py-1 border rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : ''}`}
            >
              {number}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <button 
              onClick={() => setCurrentPage(currentPage + 1)} 
              className="px-3 py-1 border rounded-md"
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
