import React, { useState } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";
import "./ModalAnt.css";
import { CloseOutlined } from "@ant-design/icons";

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
          width="100%"
          height={500}
          playing={isPlaying}
          controls
          url={trailerURL}
        />
      )}
    </Modal>
  );
}
