import { createPortal } from "react-dom"
const Modal = () =>{
    return createPortal(
        <div>
            Modal
        </div>,document.getElementById('modal')
    )
}

export default Modal