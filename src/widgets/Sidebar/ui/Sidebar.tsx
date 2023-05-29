import { useState } from 'react';
import classnames from 'shared/lib/classnames/classnames';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import Button, { ButtonTheme, ButtonSize } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import Modal from 'shared/ui/Modal/Modal';
import cls from './Sidebar.module.scss';
import { LanguageSwitcher } from '../../LanguageSwitcher';

export interface SidebarProps {
    className?:string
}
const Sidebar = ({ className }:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const { t } = useTranslation();
    const [openModal, setOpenModal] = useState(false);
    return (
        <div
            data-testid="sidebar"
            className={classnames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
            <Button theme={ButtonTheme.BACKGROUND_INVERTED} onClick={() => setOpenModal(true)}>
                {t('Open Modal')}
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
