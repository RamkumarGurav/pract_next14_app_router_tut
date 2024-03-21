import Switch from "./Switch";
import SwitchSmall from "./SwitchSmall";
import SwitchTw from "./SwitchTw";
import SwitchTw2 from "./SwitchTw2";

export default function PageName() {
  return (
    <div
      className={`min-h-[400px] flex flex-col justify-center items-center gap-4`}
    >
      <h1>Using Raw CSS</h1>
      <Switch />
      <h1>Using TW CSS (Recomended)</h1>
      <SwitchTw />
      <h1>Using TW CSS -2</h1>
      <SwitchTw2 />
      <h1>Using TW CSS - Small Switch</h1>
      <SwitchSmall />
    </div>
  );
}
