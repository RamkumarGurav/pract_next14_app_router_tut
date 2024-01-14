"use client";
import { useState } from "react";
import PaginationComp from "./PaginationComp";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
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
        totalPages={Number(30)}
        //for this component alwyay give maxVisiblePages as odd number
        maxBtnsInPaginationContainer={9}
        setPageIndexHandler={setPageIndexHandler}
        prevPageText={<GrFormPrevious size={18} />}
        nextPageText={<MdNavigateNext size={18} />}
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
