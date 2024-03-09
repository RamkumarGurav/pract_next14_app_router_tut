export default function PageName() {
  return (
    <div className="py-8 space-y-4">
      <section>
        <h1 className="text-center font-semibold ">
          Difference between outline and border when we hover on buttons
        </h1>
        <p className="text-center font-bold ">
          When you hover on the button which shows border shifts the layout{" "}
        </p>
        <p className="text-center font-bold ">
          When you hover on the button which shows outline doesn&apos;t shifts
          the layout{" "}
        </p>
        <div className="flex justify-around">
          <button className="bg-blue-500 p-2 text-white rounded hover:border hover:border-red-500">
            click me
          </button>
          <button className="bg-blue-500 p-2 text-white rounded hover:outline hover:outline-red-500">
            click me
          </button>
        </div>
      </section>
      <section>
        <h1 className="text-center font-semibold ">
          more examples of buttons and outline
        </h1>

        <div className="flex justify-around">
          <button className="bg-blue-500 p-2 text-white rounded hover:outline hover:outline-red-500 hover:outline-offset-2">
            click me
          </button>
          <button className="bg-blue-500 p-2 text-white rounded hover:outline hover:outline-red-500 hover:outline-2">
            click me
          </button>
        </div>
      </section>
    </div>
  );
}
