"use client";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

const SimpleHelloWorldModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-900 text-white rounded-lg"
        onClick={openModalHandler}
      >
        Show SimpleHelloWorld Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHandler}
        title="Simple Hello World Modal"
      >
        <div className="my-4 w-[600px] max-w-full">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            suscipit quaerat laboriosam, doloribus ut eaque labore ipsa ducimus
            possimus molestiae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia suscipit quaerat laboriosam, doloribus ut
            eaque labore ipsa ducimus possimus molestiae.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default SimpleHelloWorldModal;
