import styles from './Modal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ModalWrapper({ isOpen, setIsOpen, children }) {

    const handleClose = () => {
        setIsOpen(false);
    };

    const modalStyles = {
        content: {
            width: '100%',
            maxWidth: '280px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#ffffff',
            border: 'none',
            borderRadius: '15px',
            padding: '2rem',
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            shouldCloseOnOverlayClick={true}
            style={modalStyles}
        >
            {children}
        </Modal>
    );
}
