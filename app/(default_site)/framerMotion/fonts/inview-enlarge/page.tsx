import AnimatedDiv from "./AnimatedDiv";
import AnimatedText from "./AnimatedText";
import AnimatedTitle from "./AnimatedTitle";

export default function PageName() {
  return (
    <section
      id="Section"
      className="overflow-hidden bg-yellow-500 py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px] min-h-[100vh]"
    >
      <div className="px-4">
        <div className="py-[500px]"></div>
        <AnimatedTitle
          className={`w-full font-bold text-[50px] `}
          initial={{ opacity: 0, fontSize: "30px" }}
          whileInView={{ opacity: 1, fontSize: "50px" }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Welcome to Our Website
        </AnimatedTitle>{" "}
        <AnimatedDiv
          className="w-full h-full"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, type: "tween" }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          mollitia, voluptates consectetur magnam debitis laborum accusamus
          illum ducimus voluptas facere veniam natus doloremque incidunt ullam
          cupiditate placeat saepe magni. Velit.
        </AnimatedDiv>
      </div>
    </section>
  );
}
