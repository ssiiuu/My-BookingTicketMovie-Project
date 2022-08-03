import React, { useState } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";
import "./ModalAnt.css";

export default function ModalAnt({
  isModalVisible,
  handleCancel,
  trailerURL,
  isPlaying,
}) {
  return (
    <Modal
      className="modal-trailer"
      width={1000}
      visible={isModalVisible}
      onCancel={handleCancel}
    >
      {trailerURL && (
        <ReactPlayer
          width={1000}
          height={500}
          playing={isPlaying}
          controls
          url={trailerURL}
        />
      )}
    </Modal>
  );
}
