import Modal from "react-bootstrap/Modal";

type CustomModalProps = {
  showModal: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  style?: React.CSSProperties;
  size?: "sm" | "lg" | "xl";
};

const CustomModal = ({
  showModal,
  children,
  onClose,
  style,
  size,
}: CustomModalProps) => {
  return (
    <div onClick={onClose}>
      <Modal show={showModal} style={style} size={size}>
        <Modal.Body
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "linear-gradient(180deg, #222 0%, #111 100%)",
            border: "1px solid #3F3F3F",
            borderRadius: "5px",
          }}
        >
          {children}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CustomModal;
