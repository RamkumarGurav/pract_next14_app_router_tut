import Image from "next/image";
import Link from "next/link";
export default function PageName() {
  return (
    <div className="py-8 space-y-4">
      <section className="border-2 border-gray-400 space-y-4 flex flex-col items-stretch justify-start">
        <h1 className="text-center font-semibold ">
          difference between hover: focus
        </h1>
        <h1 className="text-center font-semibold ">hover:bg-blue-800</h1>
        <button className="mx-auto p-2 bg-blue-500 text-white font-semibold hover:bg-blue-800">
          click
        </button>
        <h1 className="text-center font-semibold ">active:bg-yellow-500</h1>
        <button className="mx-auto p-2 bg-blue-500 text-white font-semibold active:bg-yellow-500">
          click
        </button>
        <h1 className="text-center font-semibold ">focus:bg-green-500</h1>
        <button className="mx-auto p-2 bg-blue-500 text-white font-semibold focus:bg-green-500">
          click
        </button>
        <h1 className="text-center font-semibold ">focus:bg-green-500</h1>
        <input
          type="text"
          name="name"
          className="bg-gray-100 focus:bg-gray-300 w-[200px] p-2 border"
        />

        <h1 className="text-center font-semibold ">
          Styling based on Parent state using group
        </h1>
        <Link
          href="/"
          className="group mx-auto p-4 block max-w-sm shadow-lg m-4 bg-white border hover:bg-gray-900 "
        >
          <h3 className="text-lg font-bold  group-hover:text-white">
            Card Title
          </h3>
          <p className="text font-bold group-hover:text-gray-400">
            Thisi is card text
          </p>
        </Link>
        <h1 className="text-center font-semibold ">Pseudo Classes</h1>
        <ul className="w-full">
          <li className="even:bg-green-500 odd:bg-yellow-500 first:bg-red-500">
            Item 1
          </li>
          <li className="even:bg-green-500 odd:bg-yellow-500 first:bg-red-500">
            Item 2
          </li>
          <li className="even:bg-green-500 odd:bg-yellow-500 first:bg-red-500">
            Item 3
          </li>
          <li className="even:bg-green-500 odd:bg-yellow-500 first:bg-red-500">
            Item 4
          </li>
          <li className="even:bg-green-500 odd:bg-yellow-500 first:bg-red-500">
            Item 5
          </li>
          <li className="even:bg-green-500 odd:bg-yellow-500 first:bg-red-500">
            Item 6
          </li>
          <li className="even:bg-green-500 odd:bg-yellow-500 first:bg-red-500">
            Item 7
          </li>
          <li className="even:bg-green-500 odd:bg-yellow-500 first:bg-red-500">
            Item 8
          </li>
        </ul>
        <h1 className="text-center font-semibold ">appearance-none</h1>
        <select name="" id="" className="mx-auto block appearance-none">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <h1 className="text-center font-semibold ">Without appearance-none</h1>
        <select name="" id="" className="mx-auto block">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <h1 className="text-center font-semibold ">cursor-not-allowed</h1>
        <button className="mx-auto cursor-not-allowed p-4 bg-yellow-500 font-semibold">
          submit
        </button>

        <h1 className="text-center font-semibold ">select-none</h1>
        <p id="para" className="select-none text-lg font-semibold " >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          animi excepturi vero, ipsam ut iusto perspiciatis? Delectus, nesciunt
          tempore et fugit vero dolore hic ab est incidunt, ipsam officiis
          eligendi.
        </p>
      </section>
    </div>
  );
}
