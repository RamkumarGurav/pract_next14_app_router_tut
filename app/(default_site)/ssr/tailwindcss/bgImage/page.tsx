export default function PageName() {
  return (
    <div className="py-8 space-y-4">
      <section>
        <h1 className="text-center font-semibold ">
          Backround Image using Remote url
        </h1>
        <div
          className="mx-auto w-[300px] h-[200px] bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        ></div>
      </section>

      <section>
        <h1 className="text-center font-semibold">
          Backround Image using Local file from public folder - Public folder is
          directly available to all the folder and files inside the app folder
          just use single slash &quot;/&quot; access the public folder
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
