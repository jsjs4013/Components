import { useEffect, useRef, useState, ReactElement } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
    children: ReactElement;
}

const Modal = ({ children }: ModalProps) => {
    const ref = useRef<HTMLElement | null>(null);
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        const dom = document.getElementById('modal');
        if (dom) {
            ref.current = dom;
            setMounted(true);
        }
    }, []);

    if (ref.current && mounted) {
        return ReactDOM.createPortal(children, ref.current);
    }

    return null;
}

export default Modal;