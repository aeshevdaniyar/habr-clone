import classnames from 'shared/lib/classnames/classnames';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => (
    <div className={classnames(cls.Navbar, {}, [className])}>
        <div className={cls.links} />
    </div>
);

export default Navbar;
