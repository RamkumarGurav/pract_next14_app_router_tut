"use client";
import { useState } from "react";
import PaginationComp from "./PaginationComp";

export default function PractPagination() {
  const [activePage, setActivePage] = useState(1);

  const activePageHandler = (pageNo: number) => setActivePage(pageNo);
  return (
    <div className="py-10">
      <PaginationComp
        activePage={activePage}
        totalPages={30}
        itemsPerPage={5}
        siblingsPairForMiddlePoint={3}
        setActivePageHandler={activePageHandler}
        prevPageText="prev"
        nextPageText="next"
        firstPageText="1st"
        lastPageText="last"
        prevPageClass="prev-next-btn"
        nextPageClass="prev-next-btn"
        firstPageClass="first-page-btn"
        lastPageClass="last-page-btn"
        pageBtnClass="pageBtn"
        activePageBtnClass="activePageBtn"
      />
    </div>
  );
}
