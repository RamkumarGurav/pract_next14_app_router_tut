import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

export default function PageName() {
  return (
    <div>
      <section className="h-[500px] text-2xl font-bold flex justify-center items-center">
        SEE THE FOOTER - TO USE PLACE IT INSIDE LAYOUT
      </section>
      <footer id="footer">
        <FooterTop />
        <FooterBottom />
      </footer>
    </div>
  );
}
