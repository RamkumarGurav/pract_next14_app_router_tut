"use client";
import { useState } from "react";
import PaginationComp from "./PaginationComp";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Image from "next/image";
export default function PagePage() {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const setPageIndexHandler = (pageNo: number) => {
    console.log("activePageNumber: ", pageNo);
    setPageIndex(pageNo);
  };

  return (
    <div className="py-6 flex flex-col justify-center items-center">
      <div className="my-4">
        <Image
          src="/pagination_1.png"
          width={600}
          height={400}
          alt="different paginations"
        />
      </div>

      <PaginationComp
        activePage={pageIndex}
        itemsCountPerPage={Number(10)}
        totalPages={Number(56)}
        siblingsForMiddlePoint={2}
        setPageIndexHandler={setPageIndexHandler}
        // prevPageText="&lsaquo;"
        // nextPageText="&rsaquo;"
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
