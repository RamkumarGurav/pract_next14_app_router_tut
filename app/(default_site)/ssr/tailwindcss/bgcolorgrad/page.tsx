export default function PageName() {
  return (
    <div className="py-8 space-y-4">
      <section>
        <h1 className="text-center font-semibold ">
          Linear gradient form red to yellow from  left to right direction
        </h1>
        <div className="mx-auto w-[300px] h-[200px] bg-gradient-to-r from-red-500 to-yellow-500"></div>
      </section>
      <section>
        <h1 className="text-center font-semibold ">
          Linear gradient form red to yellow from right to left direction
        </h1>
        <div className="mx-auto w-[300px] h-[200px] bg-gradient-to-l from-blue-500 to-fuchsia-500"></div>
      </section>

      <section>
        <h1 className="text-center font-semibold"></h1>
        <div></div>
      </section>
    </div>
  );
}
