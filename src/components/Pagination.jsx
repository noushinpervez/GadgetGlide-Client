const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageClick = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
        }
    };

    return (
        <ol className="flex justify-center gap-1 text-xs font-medium">
            <li>
                <button
                    onClick={ () => handlePageClick(currentPage - 1) }
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                    disabled={ currentPage === 1 }
                >
                    <span className="sr-only">Prev Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </li>

            { Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
                <li key={ pageNumber }>
                    <button
                        onClick={ () => handlePageClick(pageNumber) }
                        className={ `block size-8 rounded border text-center leading-8 ${pageNumber === currentPage ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-gray-100 bg-white text-gray-900'}` }
                    >
                        { pageNumber }
                    </button>
                </li>
            )) }

            <li>
                <button
                    onClick={ () => handlePageClick(currentPage + 1) }
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                    disabled={ currentPage === totalPages }
                >
                    <span className="sr-only">Next Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </li>
        </ol>
    );
};

export default Pagination;