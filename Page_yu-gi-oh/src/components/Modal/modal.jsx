import "./style.scss";

function Modal({ show, onClose, children }) {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    );
}

export default Modal;

