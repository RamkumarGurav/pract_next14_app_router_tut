"use client";
import { useEffect, useState } from "react";

interface Props {
  activePage: number;
  totalPages: number;
  itemsCountPerPage: number;
  maxBtnsInPaginationContainer: number;
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
  maxBtnsInPaginationContainer,
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
  //no. of buttons in subPagination range always equals to maxBtnsInPaginationContainer minus 2 buttons (those are "..." and "totalPages" buttons)
  const btnsInSubPaginationRange = maxBtnsInPaginationContainer - 2;
  let middlePointInSubPaginationRange = Math.ceil(btnsInSubPaginationRange / 2);

  // Initialize paginationRange state based on total pages and maxBtnsInPaginationContainer
  const initialState =
    totalPages <= maxBtnsInPaginationContainer
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : [
          ...Array.from({ length: btnsInSubPaginationRange }, (_, i) => i + 1),
          "...",
          totalPages,
        ];

  // State to manage the visible range of pagination buttons
  const [paginationRange, setPaginationRange] =
    useState<(string | number)[]>(initialState);

  console.log("paginationRange", paginationRange);

  useEffect(() => {
    const updatePagination = () => {
      if (totalPages <= maxBtnsInPaginationContainer) {
        console.log("inside case-1 deciding the no. of btns");
        // If total pages are less than or equal to maxBtnsInPaginationContainer, show all pages
        setPaginationRange(Array.from({ length: totalPages }, (_, i) => i + 1));
      } else {
        let newRange: (string | number)[] = [];
        const firstItemInSubPaginationRange =
          paginationRange[1] === "..."
            ? (paginationRange[2] as number)
            : (paginationRange[0] as number);
        const lastItemInSubPaginationRange =
          paginationRange[1] === "..."
            ? (paginationRange[paginationRange.length - 1] as number)
            : (paginationRange[btnsInSubPaginationRange - 1] as number);
        const showingRightSideDots = paginationRange[1] !== "...";

        // Adjust pagination range based on the activePage position within the maxBtnsInPaginationContainer

        // Display the first maxBtnsInPaginationContainer pages if activePage is near the start of the totalPages
        // here " - 1" means  exluding last button inside subPaginationRange
        if (activePage <= btnsInSubPaginationRange - 1) {
          console.log("inside case-2 for near the start of the pages ");
          let subPaginationRange = Array.from(
            { length: btnsInSubPaginationRange },
            (_, i) => i + 1
          );
          newRange = [...subPaginationRange, "...", totalPages];
        }
        // Display the last maxBtnsInPaginationContainer pages if activePage is near the end of the total pages
        // here " - 1" means  exluding first starting btn in subPaginationRange"
        else if (activePage > totalPages - (btnsInSubPaginationRange - 1)) {
          console.log("inside case-3 for near the end of the pages");
          let subPaginationRange = Array.from(
            { length: btnsInSubPaginationRange },
            (_, i) => totalPages - (btnsInSubPaginationRange - 1) + i
          );
          newRange = [1, "...", ...subPaginationRange];
        }
        // Display a range centered around the activePage
        else {
          if (
            activePage < lastItemInSubPaginationRange &&
            activePage > firstItemInSubPaginationRange &&
            showingRightSideDots
          ) {
            console.log(
              "inside case-4 showing same previous subPaginationRange when active page moves between first and last pages inside subPaginationRange "
            );

            //using the previous paginationRange for this condition
            newRange = [...paginationRange];
          } else {
            //------------------behavior-1------------
            // ----------------------------------
            console.log(
              "inside case-6 placing the activePage  at subPaginationRange's middlePoint when activePage moves to first and last pages inside subPaginationRange  "
            );
            let subPaginationRange = Array.from(
              { length: btnsInSubPaginationRange },
              (_, i) => activePage - (middlePointInSubPaginationRange - 1) + i
            );
            newRange = [...subPaginationRange, "...", totalPages];
            // ----------------------------------
            //
            //
            //   //  ------------------behavior-2--------
            //  //  -----------------------------------
            //     console.log(
            //       "inside case-6 placing the activePage  at subPaginationRange's 2nd spot from starting(from leftside) when activePage moves to ending spot of subPaginationRange  and placing the activePage  at subPaginationRange's 2nd spot from ending(from rightside) when activePage moves to first spot of the subPaginationRange"
            //     );
            //     if (
            //       paginationRange.indexOf(activePage) ===
            //       btnsInSubPaginationRange - 1
            //     ) {
            //       console.log("1");
            //       let subPaginationRange = Array.from(
            //         { length: btnsInSubPaginationRange },
            //         (_, i) => activePage - 1 + i
            //       );
            //       newRange = [...subPaginationRange, "...", totalPages];
            //     } else {
            //       console.log("2");
            //       let subPaginationRange = Array.from(
            //         { length: btnsInSubPaginationRange },
            //         (_, i) => activePage - (btnsInSubPaginationRange - 2) + i
            //       );
            //       newRange = [...subPaginationRange, "...", totalPages];
            //     }
            //     //----------------------------------
          }
        }

        // Update the pagination range
        setPaginationRange(newRange);
      }
    };

    updatePagination(); // Invoke the updatePagination function
  }, [activePage, totalPages]);

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
            className={`${itemClass} ${activePage === item && activeClass} ${
              item === "..." &&
              "hover:bg-white hover:text-gray-900 hover:border-gray-300"
            }`}
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
