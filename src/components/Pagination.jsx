import { FaLeftLong, FaRightLong } from 'react-icons/fa6';

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const handlePre = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  console.log(pages);
  return (
    <div>
      <button
        className="ml-2 px-2 py-[6px] text-xs text-white bg-blue-500"
        onClick={handlePre}
      >
        <FaLeftLong />
      </button>{' '}
      {pages.map(p => (
        <button
          onClick={() => setCurrentPage(p)}
          className={
            currentPage === p
              ? 'bg-blue-500 ml-2 px-2 text-white'
              : 'bg-gray-400 ml-2 px-2 text-white'
          }
          key={p}
        >
          {p + 1}
        </button>
      ))}
      <button
        className="ml-2 px-2 py-[6px] text-xs text-white bg-blue-500"
        onClick={handleNext}
      >
        {' '}
        <FaRightLong />{' '}
      </button>
    </div>
  );
};

export default Pagination;
