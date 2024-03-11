import Modal from "./Modal";
import ModalContainer from "./ModalContainer";

export default function PageName() {
  return (
    <div>
      <ModalContainer>
        <div className="bg-gray-100 w-full h-full flex flex-col justify-center items-center p-2">
          <h1 className="text-black text-2xl font-semibold">Are you Sure?</h1>
          <div></div>
        </div>
      </ModalContainer>
    </div>
  );
}
