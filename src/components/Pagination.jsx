

const Pagination = ({ pages,currentPage, setCurrentPage }) => {
  
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
      <button className="ml-2 px-2 text-white bg-red-500" onClick={handlePre}> pre </button>{' '}
      {pages.map(p => (
        <button onClick={()=>setCurrentPage(p)} className={currentPage===p?"bg-red-500 ml-2 px-2 text-white":"bg-blue-500 ml-2 px-2 text-white"} key={p}>
          {p + 1}
        </button>
      ))}
      <button  className="ml-2 px-2 text-white bg-red-500" onClick={handleNext}> next </button>
    </div>
  );
};

export default Pagination;
