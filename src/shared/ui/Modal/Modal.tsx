import {
    useRef, useState, MouseEvent, useEffect, useCallback, FC,
} from 'react';
import classnames from 'shared/lib/classnames/classnames';
import Portal from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

export interface ModalProps {
    className?: string,
    isOpen: boolean,
    onClose?: () => void
}

const ANIMATION_DELAY = 300;
const Modal:FC<ModalProps> = (props) => {
    const {
        className, isOpen, onClose, children,
    } = props;
    const [isClosing, setIsClosing] = useState(false);

    const timerRef = useRef(null);

    const closeHandler = useCallback(() => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            // eslint-disable-next-line no-unused-expressions
            onClose && onClose();
            setIsClosing(false);
        }, ANIMATION_DELAY);
    }, [onClose]);

    const contentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const mods:Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classnames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={contentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
