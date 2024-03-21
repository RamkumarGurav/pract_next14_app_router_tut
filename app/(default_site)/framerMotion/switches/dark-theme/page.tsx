import Switch from "./Switch";

export default function PageName() {
  return (
    <div
      className={`min-h-[400px] flex flex-col justify-center items-center gap-4`}
    >
      <h1>Using Raw CSS</h1>
      <div className="p-8 w-full bg-purple-950 flex justify-end">
        <Switch />
      </div>
    </div>
  );
}
