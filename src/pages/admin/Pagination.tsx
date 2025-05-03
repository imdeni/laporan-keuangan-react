import React from "react";
import ReactPaginate from "react-paginate";

interface Props {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<Props> = ({ pageCount, onPageChange }) => {
    return (
      <div className="p-4 border-t bg-gray-50 flex justify-center text-gray-800">
        <ReactPaginate
          previousLabel={"← Sebelumnya"}
          nextLabel={"Berikutnya →"}
          pageCount={pageCount}
          onPageChange={onPageChange}
          containerClassName={"flex items-center space-x-2"}
          pageClassName={"px-3 py-1 bg-white border rounded text-sm cursor-pointer select-none"}
          activeClassName={"!bg-gray-800 !text-white cursor-pointer select-none"}
          previousClassName={"px-3 py-1 bg-gray-200 rounded text-sm cursor-pointer select-none"}
          nextClassName={"px-3 py-1 bg-gray-200 rounded text-sm cursor-pointer select-none"}
          disabledClassName={"opacity-50 cursor-not-allowed"}
        />
      </div>
    );
  };

export default Pagination;
