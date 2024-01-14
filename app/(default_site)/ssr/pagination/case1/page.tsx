"use client";
import { useState } from "react";
import PaginationComp from "./PaginationComp";

export default function PagePage() {
  const [pageIndex, setPageIndex] = useState(1);



  
  const setPageIndexHandler = (pageNo: number) => {
    console.log("activePageNumber: ", pageNo);
    setPageIndex(pageNo);
  };

  return (
    <div>
      <PaginationComp
        activePage={pageIndex}
        itemsCountPerPage={Number(10)}
        totalPages={Number(20)}
        setPageIndexHandler={setPageIndexHandler}
        nextPageText="Next"
        prevPageText="Prev"
        firstPageText="1st"
        lastPageText="Last"
        itemClass="pageBtn"
        linkClass="pageLinkClass"
        activeClass="activePageBtn"
        activeLinkClass="activePageLink"
      />
    </div>
  );
}
