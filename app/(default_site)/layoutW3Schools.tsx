"use client";

import { useState } from "react";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative flex pt-[60px] ">
      <header className="fixed top-0 left-0 h-[60px] w-full text-xl font-bold p-4 text-white text-center bg-black/50 z-[999] flex justify-between">
        <button
          className="flex sm:hidden text-sm bg-blue-600"
          onClick={() => setOpen(!open)}
        >
          menu
        </button>
        <p> This is the header for default site</p>
      </header>
      <aside className="fixed top-[0] left-0 min-w-[220px]   ">
        <div className="max-w-[220px] h-[60px] bg-red-500/50"></div>
        <div
          className={`${
            !open && "hidden"
          } sm:flex flex-col max-w-[220px] h-[calc(100vh-60px)] bg-slate-400 overflow-y-auto z-[99999]`}
        >

          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          sunt nam molestiae officia veniam. Sapiente nam nisi harum magnam
          voluptatem odit ullam quos cum dolorum, explicabo, id ipsa, modi
          inventore. Accusantium ea, accusamus numquam libero sint enim, sunt
          ipsam placeat fugit consequatur ullam eligendi adipisci minus rem
          laudantium, nisi optio laborum deleniti ex dolor. Totam laboriosam et
          laudantium asperiores consectetur accusamus dolor, natus ex neque
          doloremque porro corrupti vitae sequi necessitatibus, obcaecati
          inventore nemo quod, laborum voluptates reiciendis incidunt? Delectus
          qui sapiente maxime libero recusandae cum necessitatibus labore
          aperiam. Consectetur impedit illo ipsam sed sapiente ducimus debitis
          unde facere maxime!
        </div>
      </aside>
      <aside className="dummyaside min-w-[220px] h-screen  hidden sm:flex flex-col bg-blue-800/50"></aside>
      <main className="grow">
        <div className="w-full">{children}</div>

        <footer className="w-full text-xl font-bold p-4 text-white text-center bg-black">
          This is the footer for default site
        </footer>
      </main>
    </div>
  );
}
