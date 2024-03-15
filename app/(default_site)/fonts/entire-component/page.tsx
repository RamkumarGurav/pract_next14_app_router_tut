import { Crushed } from "next/font/google";
const font = Crushed({ weight: "400", subsets: ["latin"] });

export default function PageName() {
  return (
    <div className={`${font.className} min-h-[400px]`}>
      <p>Add the "font.className" to parent of the component</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quos
        corporis porro velit id? Similique veniam magni quam dolorum
        consectetur!
      </p>
      <p>These are the examples for fonts</p>
      <p>These are the examples for fonts</p>
      <div>
        <h1>
          HELLLLO Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          perferendis!
        </h1>
      </div>
    </div>
  );
}
