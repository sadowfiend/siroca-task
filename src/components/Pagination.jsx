import React from 'react';
import ReactPaginate from "react-paginate";

const Pagination = ({onChangePage}) => {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={10}
            pageCount={4}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
};

export default Pagination;