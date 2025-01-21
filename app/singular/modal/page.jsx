import React from "react";
import SimpleHelloWorldModal from "./components/SimpleHelloWorldModal";
import ShowImageModal from "./components/ShowimageModal";
import VideoPlayerModal from "./components/VideoPlayerModal";

const ModalPage = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>This is Modal Page</h1>
      <br />
      <br />
      {/* <SimpleHelloWorldModal /> */}
      {/* <ShowImageModal /> */}
      <VideoPlayerModal />
    </div>
  );
};

export default ModalPage;
