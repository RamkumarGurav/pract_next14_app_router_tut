export default function PageName() {
  return (
    <div className="py-4 space-y-4 ">
      <div className="w-screen bg-blue-500 text-white font-bold text-center text-xl">
        w-screen
      </div>
      <div className="w-full bg-blue-500 text-white font-bold text-center text-xl">
        w-full
      </div>

      <div className="w-[700px] bg-yellow-100 space-y-2 py-4 ">
        <div className="w-screen bg-blue-500 text-white font-bold text-center text-xl">
          w-screen : no matter what the parent element&apos;s width is, this
          element will have the screen width and will create a horizonat scroll
          when you go below 700px, and
        </div>
        <div className="w-full bg-blue-500 text-white font-bold text-center text-xl">
          w-full
        </div>
      </div>

      <div className="max-w-[800px] bg-blue-500 text-white font-bold text-center text-xl">
        max-w-[800px] : this element&apos; normal width will be 800px only and when we go below 800px it will reduce and have its parents width
      </div>
    </div>
  );
}
