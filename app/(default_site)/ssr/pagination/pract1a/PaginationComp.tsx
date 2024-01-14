"use client";

import { useEffect, useState } from "react";

export interface Pagination {
  activePage: number;
  totalPages: number;
  itemsPerPage: number;
  siblingsPairForMiddlePoint: number;
  setActivePageHandler: (a: number) => void;
  prevPageText: React.ReactNode;
  nextPageText: React.ReactNode;
  firstPageText: React.ReactNode;
  lastPageText: React.ReactNode;
  prevPageClass: string;
  nextPageClass: string;
  firstPageClass: string;
  lastPageClass: string;
  pageBtnClass: string;
  activePageBtnClass: string;
}
export default function PaginationComp({
  activePage,
  totalPages,
  itemsPerPage,
  siblingsPairForMiddlePoint,
  setActivePageHandler,
  prevPageText,
  nextPageText,
  firstPageText,
  lastPageText,
  prevPageClass,
  nextPageClass,
  firstPageClass,
  lastPageClass,
  pageBtnClass,
  activePageBtnClass,
}: Pagination) {
  const dotsBtnAndFirstOrLastBtn = 2;
  const maxPageBtns = 7 + dotsBtnAndFirstOrLastBtn;
  const btnsInSubPaginationRange = maxPageBtns - dotsBtnAndFirstOrLastBtn;
  const middlePointInSubPaginationRange = Math.floor(
    btnsInSubPaginationRange / 2
  );

  console.log("btnsInSubPaginationRange", btnsInSubPaginationRange);
  const initialState =
    totalPages <= maxPageBtns
      ? [...Array.from({ length: totalPages }, (_, i) => i + 1)]
      : [
          ...Array.from({ length: btnsInSubPaginationRange }, (_, i) => i + 1),
          "...",
          totalPages,
        ];

  const [paginationRange, setPaginationRange] = useState(initialState);

  useEffect(() => {
    if (totalPages <= maxPageBtns) {
      console.log(1);
      setPaginationRange([
        ...Array.from({ length: totalPages }, (_, i) => i + 1),
      ]);
    } else {
      if (activePage <= btnsInSubPaginationRange - 1) {
        console.log(2);
        setPaginationRange([
          ...Array.from({ length: btnsInSubPaginationRange }, (_, i) => i + 1),
          "...",
          totalPages,
        ]);
      } else if (activePage > totalPages - (btnsInSubPaginationRange - 1)) {
        console.log(3);
        setPaginationRange([
          1,
          "...",
          ...Array.from(
            { length: btnsInSubPaginationRange },
            (_, i) => totalPages - btnsInSubPaginationRange + i + 1
          ),
        ]);
      } else if (
        paginationRange[paginationRange.length - 1 - 1] === "..." &&
        activePage > Number(paginationRange[0]) &&
        activePage < Number(paginationRange[paginationRange.length - 1 - 2])
      ) {
        setPaginationRange([...paginationRange]);
      } else {
        console.log(5);
        setPaginationRange([
          ...Array.from(
            { length: btnsInSubPaginationRange },
            (_, i) => activePage - middlePointInSubPaginationRange + i
          ),
          "...",
          totalPages,
        ]);
      }
    }
  }, [activePage]);

  return (
    <div id="pagination_shell" className="pagination-shell">
      <div id="pagination_container" className="pagination-container">
        <button
          className={`${firstPageClass}`}
          onClick={() => setActivePageHandler(1)}
        >
          {firstPageText}
        </button>
        <button
          className={`${prevPageClass}`}
          onClick={() =>
            setActivePageHandler(activePage <= 1 ? 1 : activePage - 1)
          }
        >
          {prevPageText}
        </button>
        {paginationRange.map((item: number | string, i: number) => (
          <button
            key={i}
            className={`${pageBtnClass} ${
              item === activePage ? activePageBtnClass : ""
            }`}
            onClick={() =>
              item === "..." && i === 1
                ? setActivePageHandler(1)
                : item === "..." && i === paginationRange.length - 2
                ? setActivePageHandler(totalPages)
                : setActivePageHandler(item as number)
            }
          >
            {item}
          </button>
        ))}
        <button
          className={`${nextPageClass}`}
          onClick={() =>
            setActivePageHandler(
              activePage <= totalPages - 1 ? activePage + 1 : totalPages
            )
          }
        >
          {nextPageText}
        </button>
        <button
          className={`${lastPageClass}`}
          onClick={() => setActivePageHandler(totalPages)}
        >
          {lastPageText}
        </button>
      </div>
    </div>
  );
}
