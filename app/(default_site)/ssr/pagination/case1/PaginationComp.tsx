"uce client";
import { useState } from "react";
import _ from "lodash";

interface Props {
  activePage: number;
  totalPages: number;
  itemsCountPerPage: number;
  setPageIndexHandler: (pageNo: number) => void;
  firstPageText: string;
  lastPageText: string;
  prevPageText: string;
  nextPageText: string;
  activeClass: string;
  itemClass: string;
  linkClass: string;
  activeLinkClass: string;
}

export default function PageName({
  activePage,
  totalPages,
  itemsCountPerPage,
  setPageIndexHandler,
  firstPageText,
  lastPageText,
  prevPageText,
  nextPageText,
  activeClass,
  itemClass,
  linkClass,
  activeLinkClass,
}: Props) {
  
  return (
    <div className="flex m-4">
      <button className={`${linkClass}`} onClick={() => setPageIndexHandler(1)}>
        {firstPageText}
      </button>
      <button
        className={`${linkClass}`}
        onClick={() => setPageIndexHandler(activePage > 0 ? activePage - 1 : 1)}
      >
        {prevPageText}
      </button>
      <button
        className={` ${itemClass} ${activePage === activePage && activeClass}`}
        onClick={() => setPageIndexHandler(activePage)}
      >
        {activePage <= 3 * activePage + 1 ? activePage - 1 : activePage + 3}
      </button>
      <button
        className={` ${itemClass} ${
          activePage === activePage + 1 && activeClass
        }`}
        onClick={() => setPageIndexHandler(activePage + 1)}
      >
        {activePage > 2 ? activePage - 1 : 26}
      </button>
      <button
        className={` ${itemClass} ${
          activePage === activePage + 2 && activeClass
        }`}
        onClick={() => setPageIndexHandler(activePage + 2)}
      >
        {activePage > 3 ? activePage - 1 : 3}
      </button>
      <button
        className={` ${itemClass} ${
          activePage === activePage + 3 && activeClass
        }`}
        onClick={() => setPageIndexHandler(activePage + 3)}
      >
        {activePage + 3}
      </button>

      <button
        className={`${linkClass}`}
        onClick={() =>
          setPageIndexHandler(
            activePage >= totalPages ? activePage + 1 : totalPages
          )
        }
      >
        {nextPageText}
      </button>

      <button
        className={`${linkClass}`}
        onClick={() => setPageIndexHandler(totalPages)}
      >
        {lastPageText}
      </button>
    </div>
  );
}
