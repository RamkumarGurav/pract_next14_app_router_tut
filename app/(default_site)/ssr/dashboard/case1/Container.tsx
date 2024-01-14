"use client";

import { useState, useEffect, useRef } from "react";
import LoginPopup from "./LoginPopup";

export default function Container() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRootRef = useRef<HTMLElement | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //since we have already created the root div element for popup on Serverside  we get the root div element for popup after first render
  useEffect(() => {
    modalRootRef.current = window.document.getElementById("login-modal-root");
    console.log("After render modalRootRef.currentfirst", modalRootRef.current);
    return () => {
      modalRootRef.current = null;
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={openModal}
        className="bg-blue-400 m-3 p-3 rounded text-white"
      >
        Open Login Modal
      </button>

      <LoginPopup
        isModalOpen={isModalOpen}
        modalRootRef={modalRootRef}
        onClose={closeModal}
      />
    </div>
  );
}
