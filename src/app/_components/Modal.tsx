import { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-100">
      <div className="relative bg-white rounded-lg shadow-lg  max-w-[90%] md:max-w-[75%] lg:max-w-[50%]">
        {children}
      </div>
    </div>
  );
};

export default Modal;
