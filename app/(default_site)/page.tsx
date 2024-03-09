export default function Home() {
  return (
    <div className="text-xl text-blue-500">
      <h1>HOme page</h1>
      <section>
        <h1 className="text-center font-semibold">
          Backround Image using Local file from public folder
        </h1>
        <div
          className="mx-auto w-[300px] h-[200px] bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url('/manali.jpeg')`,
          }}
        ></div>
      </section>
    </div>
  );
}
