import './styles/Modal.css'
export default function Modal(props) {
    return (
    <div class="modal-overlay" onClick={() => props.onClose()}>
        <div class="standard-dialog center scale-down" id="error-modal" onClick={(e) => e.stopPropagation()}>
        <div class="modal-contents">
            <h1 class="modal-text">{props.title}</h1>
            {props.children}
            <section id="modal-row-btn" class="field-row" style="justify-content: flex-end">
                <button class="btn" onClick={() => props.onClose()}>OK</button>
            </section>
        </div>
        </div>
    </div>
    );
}