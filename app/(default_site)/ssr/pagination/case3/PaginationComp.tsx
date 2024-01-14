import { useEffect, useState } from "react";

interface Props {
  activePage: number;
  totalPages: number;
  itemsCountPerPage: number;
  maxVisiblePages: number;
  setPageIndexHandler: (pageNo: number) => void;
  firstPageText: React.ReactNode;
  lastPageText: React.ReactNode;
  prevPageText: React.ReactNode;
  nextPageText: React.ReactNode;
  activeClass: string;
  itemClass: string;
  prevNextClass: string;
  firstClass: string;
  lastClass: string;
  linkClass: string;
  activeLinkClass: string;
}

export default function PageName({
  activePage,
  totalPages,
  itemsCountPerPage,
  maxVisiblePages,
  setPageIndexHandler,
  firstPageText,
  lastPageText,
  prevPageText,
  nextPageText,
  activeClass,
  itemClass,
  prevNextClass,
  firstClass,
  lastClass,
  linkClass,
  activeLinkClass,
}: Props) {
  // Initialize paginationRange state based on total pages and maxVisiblePages
  const initialState =
    totalPages <= maxVisiblePages
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : Array.from({ length: maxVisiblePages }, (_, i) => i + 1);

  // State to manage the visible range of pagination buttons
  const [paginationRange, setPaginationRange] =
    useState<number[]>(initialState);

  useEffect(() => {
    // Update pagination range based on activePage and total pages
    const updatePagination = () => {
      if (totalPages <= maxVisiblePages) {
        // If total pages are less than or equal to maxVisiblePages, show all pages
        setPaginationRange(Array.from({ length: totalPages }, (_, i) => i + 1));
      } else {
        let newRange: number[] = [];
        let middlePoint = Math.ceil(maxVisiblePages / 2);

        // Adjust pagination range based on the activePage position within the maxVisiblePages

        // Display the first maxVisiblePages pages if activePage is near the start of the totalPages
        // here if the maxVisiblePage is 5 then middlePoint will be 3
        if (activePage <= middlePoint) {
          newRange = Array.from({ length: maxVisiblePages }, (_, i) => i + 1);
          console.log("activePage <= middlePoint", newRange);
        }
        // Display the last maxVisiblePages pages if activePage is near the end of the total pages
        else if (activePage > totalPages - middlePoint) {
          newRange = Array.from(
            { length: maxVisiblePages },
            (_, i) => totalPages - maxVisiblePages + i + 1
          );
          console.log("activePage > totalPages - middlePoint", newRange);
        }
        // Display a range centered around the activePage
        else if ((activePage - 1) % (maxVisiblePages - 1) === 0) {
          newRange = Array.from(
            { length: maxVisiblePages },
            (_, i) => activePage + i
          );
          console.log(
            "(activePage - 1) % (maxVisiblePages - 1) === 0",
            newRange
          );
        } else if ((activePage - 1) % (maxVisiblePages - 1) > 0) {
          newRange = Array.from(
            { length: maxVisiblePages },
            (_, i) =>
              activePage - ((activePage - 1) % (maxVisiblePages - 1)) + i
          );
          console.log("(activePage - 1) % (maxVisiblePages - 1) > 0", newRange);
        } else {
          newRange = Array.from(
            { length: maxVisiblePages },
            (_, i) => activePage + i
          );
          console.log("final else", newRange);
        }
        // Update the pagination range
        setPaginationRange(newRange);
      }
    };

    updatePagination(); // Invoke the updatePagination function
  }, [activePage, totalPages]);

  // useEffect(() => {
  //   const updatePagination = () => {
  //     if (totalPages <= maxVisiblePages) {
  //       setPaginationRange(Array.from({ length: totalPages }, (_, i) => i + 1));
  //     } else {
  //       let newRange: number[] = [];
  //       const middlePoint = Math.ceil(maxVisiblePages / 2);

  //       if (activePage <= middlePoint) {
  //         newRange = Array.from({ length: maxVisiblePages }, (_, i) => i + 1);
  //       } else if (activePage > totalPages - middlePoint) {
  //         newRange = Array.from({ length: maxVisiblePages }, (_, i) => totalPages - maxVisiblePages + i + 1);
  //       } else {
  //         const startPage = activePage - middlePoint + 1;
  //         newRange = Array.from({ length: maxVisiblePages }, (_, i) => startPage + i);
  //       }

  //       setPaginationRange(newRange);
  //     }
  //   };

  //   updatePagination();
  // }, [activePage, totalPages, maxVisiblePages]);
  return (
    <div className="pagination-shell ">
      <div className="pagination-container ">
        {/* First Page Button */}
        <button
          className={`${firstClass}`}
          onClick={() => setPageIndexHandler(1)}
          disabled={activePage < 1}
        >
          {firstPageText}
        </button>

        {/* Previous Page Button */}
        <button
          className={`${prevNextClass}`}
          onClick={() =>
            setPageIndexHandler(activePage !== 1 ? activePage - 1 : 1)
          }
          disabled={activePage < 1}
        >
          {prevPageText}
        </button>

        {/* Pagination Buttons */}
        {paginationRange.map((item: number | string, i: number) => (
          <button
            key={i}
            className={`${itemClass} ${activePage === item && activeClass}`}
            onClick={() => setPageIndexHandler(item as number)}
            disabled={typeof item === "string"}
          >
            {item}
          </button>
        ))}

        {/* Next Page Button */}
        <button
          className={`${prevNextClass}`}
          onClick={() =>
            setPageIndexHandler(
              activePage !== totalPages ? activePage + 1 : totalPages
            )
          }
          disabled={activePage > totalPages}
        >
          {nextPageText}
        </button>

        {/* Last Page Button */}
        <button
          className={`${lastClass}`}
          onClick={() => setPageIndexHandler(totalPages)}
          disabled={activePage > totalPages}
        >
          {lastPageText}
        </button>
      </div>
    </div>
  );
}
