import './Modal.scss';
import { CloseOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ children, active, setActive }) => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div className="relative">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <CloseOutlined
            onClick={() => setActive(false)}
            className="absolute top-[3%] right-[4%] cursor-pointer"
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
