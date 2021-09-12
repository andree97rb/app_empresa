import { useState } from 'react';

const usePagination = (data) => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const itemsPerPage = 5;
    const maxPage = Math.ceil(data.length / itemsPerPage);
    const indexOfFirstData = (currentPage - 1) * itemsPerPage;
    const indexOfLastData = indexOfFirstData + itemsPerPage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData);

    const goNextPage = () => {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    };

    const goNextPrevious = () => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    };

    const goJumpPage = (page) => {
        const pageNumber = Math.max(1, page);
        setCurrentPage(() => Math.min(pageNumber, maxPage));
    };

    return {
        maxPage,
        goNextPage,
        goNextPrevious,
        goJumpPage,
        currentPage,
        currentData,
        indexOfFirstData
    };
}

export default usePagination;