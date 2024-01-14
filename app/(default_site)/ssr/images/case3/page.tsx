export default function Pixels() {
  const pixelsArr = [
    10, 16, 20, 50, 100, 150, 200, 300, 400, 500, 600, 640, 768, 1024, 1280,
  ];

  const m = [
    1, 2, 5, 10, 16, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 300, 400,
    500,
  ];
  return (
    <div className="bg-black text-black flex flex-col items-start justify-center flex-wrap gap-4 p-4">
      <div className="w-full flex gap-4 flex-wrap">
        {m.map((item, i) => (
          <div
            key={i}
            className={`bg-white  flex justify-center items-center  font-bold`}
            style={{ width: `${item}px`, height: `300px` }}
          >
            {item}
          </div>
        ))}
      </div>

      {pixelsArr.map((item, i) => (
        <div
          key={i}
          className={`bg-white  flex justify-center items-center  font-bold`}
          style={{ width: `${item}px`, height: `${item}px` }}
        >
          {item < 50 ? "" : item + "X" + item}
        </div>
      ))}
    </div>
  );
}
