import React from "react";
import SimpleHelloWorldModal from "./components/SimpleHelloWorldModal";
import ShowImageModal from "./components/ShowimageModal";
import VideoPlayerModal from "./components/VideoPlayerModal";
import ConfirmationModal from "./components/ConfirmationModal";
import InputFormModal from "./components/InputFormModal";
import TimerCountdownModal from "./components/TimerCountdownModal";

const ModalPage = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>This is Modal Page</h1>
      <br />
      <br />
      <hr className="bg-sky-400 h-1 my-4" />
      <SimpleHelloWorldModal />
      <hr className="bg-sky-400 h-1 my-4" />
      <ShowImageModal />
      <hr className="bg-sky-400 h-1 my-4" />
      <VideoPlayerModal />
      <hr className="bg-sky-400 h-1 my-4" />
      <ConfirmationModal />
      <hr className="bg-sky-400 h-1 my-4" />
      <InputFormModal />
      <hr className="bg-sky-400 h-1 my-4" />
      <TimerCountdownModal />
    </div>
  );
};

export default ModalPage;
