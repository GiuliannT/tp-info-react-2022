export const ButtonNavigatePages = ({ currentPage = false, number = null, arrow = null, onClick }) => {
  return (
    <>
      {arrow === "prev" && (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-10 h-6 rounded mx-1" onClick={onClick}>
          <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </button>
      )}
      {number && (
        <button
          className={`hover:bg-blue-700 text-white font-bold w-8 h-8 rounded mx-1 ${currentPage ? "bg-blue-700" : "bg-blue-500"}`}
          id={number}
          onClick={onClick}
        >
          {number}
        </button>
      )}
      {arrow === "next" && (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-10 h-6 rounded mx-1" onClick={onClick}>
          <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </button>
      )}
    </>
  );
};
