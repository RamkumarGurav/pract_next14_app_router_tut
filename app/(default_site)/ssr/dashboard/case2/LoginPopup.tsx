// components/LoginModal.tsx
"use client";
import ReactDOM from "react-dom";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalRootRef: { current: null | HTMLElement };
}

const LoginPopup: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  modalRootRef,
}) => {
  console.log("LoginPopup Rendered");

  //returning blank if LoginPopup is not triggered or if there is no 'login-modal-root' element in the page
  if (!modalRootRef?.current || !isOpen) {
    console.log("portal is still not created");
    return null;
  }

  console.log("portal got created");

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-2 rounded-lg w-[300px] h-[300px] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {/* Add your login form here */}
        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md mx-auto"
        >
          Close
        </button>
      </div>
    </div>,
    modalRootRef.current
  );
};

export default LoginPopup;
