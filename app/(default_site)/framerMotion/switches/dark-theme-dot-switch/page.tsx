import DotSwitch from "./DotSwitch";

export default function PageName() {
  return (
    <div
      className={`min-h-[400px] flex flex-col justify-center items-center gap-4`}
    >
      <h1>Using Raw CSS</h1>
      <DotSwitch />
    </div>
  );
}
