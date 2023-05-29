import classnames from 'shared/lib/classnames/classnames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const onCloseModal = useCallback(() => {
        setOpenAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setOpenAuthModal(true);
    }, []);

    return (
        <div className={classnames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenModal} className={cls.links}>
                {t('Войти')}
            </Button>

            <Modal isOpen={openAuthModal} onClose={onCloseModal}>
                {t('Lorem Ipsum')}
            </Modal>
        </div>
    );
};

export default Navbar;
