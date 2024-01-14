// components/LoginModal.tsx
"use client";
import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface LoginModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  modalRootRef: { current: HTMLElement | null };
}

const LoginPopup: React.FC<LoginModalProps> = ({
  isModalOpen,
  onClose,
  modalRootRef,
}) => {

  //returning blank unless we isModalOpen is true or we get the our rootdiv element inside modalRootRef.current
  //Here in this case1 ,Even though we have rootdiv Element after first render but we need to display null until isModalOpen becomes true
  if (!modalRootRef?.current || !isModalOpen) {
    console.log("modal not visible");
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-2 rounded-lg w-[300px] h-[300px] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {/* Add your login form here */}
        <button
          onClick={onClose}
          className="bg-blue-300 hover:bg-blue-400 px-4 py-2 rounded-md mx-auto"
        >
          Close
        </button>
      </div>
    </div>,
    modalRootRef.current
  );
};

export default LoginPopup;
