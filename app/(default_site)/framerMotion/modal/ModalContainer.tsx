"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

export default function ModalContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <div className="bg-yellow-500 min-h-[90vh] w-full flex items-center justify-center">
      <button
        onClick={() => (modalOpen ? close() : open())}
        className="button p-2 bg-black text-white rounded "
      >
        Launch Modal
      </button>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            {children}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
