"use client";
import { useState } from "react";
import PaginationComp from "./PaginationComp";

export default function PagePage() {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const setPageIndexHandler = (pageNo: number) => {
    console.log("activePageNumber: ", pageNo);
    setPageIndex(pageNo);
  };

  return (
    <div className="py-6">
      <PaginationComp
        activePage={pageIndex}
        itemsCountPerPage={Number(10)}
        totalPages={Number(2101)}
        maxVisiblePages={5}
        setPageIndexHandler={setPageIndexHandler}
        nextPageText="&#62;"
        prevPageText="<"
        firstPageText="1st"
        lastPageText="Last"
        firstClass="first-page-btn"
        lastClass="last-page-btn"
        prevNextClass={"prev-next-btn"}
        itemClass="pageBtn"
        linkClass="pageLinkClass"
        activeClass="activePageBtn"
        activeLinkClass="activePageLink"
      />
    </div>
  );
}
