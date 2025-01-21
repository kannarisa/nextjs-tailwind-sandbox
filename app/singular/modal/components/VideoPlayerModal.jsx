"use client";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

const VideoPlayerModal = () => {
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
        Show VideoPlayer Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHandler}
        title="VideoPlayer Modal"
      >
        <div className="my-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Bv4CqIxqTMA?si=tPFak3zc20kXWMRR"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default VideoPlayerModal;
