import React from "react";
import { Modal } from "antd";
import { SmileTwoTone } from "@ant-design/icons";
import "./ConfirmModal.scss";

const ConfirmModal = ({ visible, onOk, onCancel }) => {
  return (
    <Modal
      title="Felicidades! Has realizado tu compra con éxito"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <div className="confirmModal">
        <SmileTwoTone style={{ fontSize: '60px' }} />
      </div>
    </Modal>
  );
};

export default ConfirmModal;
