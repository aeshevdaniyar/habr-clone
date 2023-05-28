import classnames from 'shared/lib/classnames/classnames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => (
    <div className={classnames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/"
                className={cls.mainLink}
            >
                Главная
            </AppLink>
            <AppLink theme={AppLinkTheme.RED} to="/about">
                О сайте
            </AppLink>
        </div>
    </div>
);

export default Navbar;