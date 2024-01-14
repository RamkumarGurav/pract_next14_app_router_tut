"use client";

import { useState, useEffect, useRef } from "react";
import LoginPopup from "./LoginPopup";

export default function Container() {
  let firstRender = true;
  console.log("Container is rendered");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirstRendeOver, setIsFirstRendeOver] = useState(false);
  const modalRootRef = useRef<HTMLElement | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //triggering second render
  useEffect(() => {
    setIsFirstRendeOver(true);
    console.log("Triggering Second render");
  }, []);

  //accessing  the root div for pupup after second render
  useEffect(() => {
    //this below line runs after first and second render
    modalRootRef.current = window.document.getElementById("login-modal-root");

    //this below line runs after  second render
    isFirstRendeOver &&
      console.log(
        "After Second render modalRootRef.current",
        modalRootRef.current
      );

    return () => {
      modalRootRef.current = null;
    };
  }, [isFirstRendeOver]);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={openModal}
        className="bg-blue-400 m-3 p-3 rounded text-white"
      >
        Open Login Modal
      </button>

      <LoginPopup
        isOpen={isModalOpen}
        modalRootRef={modalRootRef}
        onClose={closeModal}
      />
    </div>
  );
}
