import { useState } from 'react';
import classnames from 'shared/lib/classnames/classnames';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
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

    return (
        <div
            data-testid="sidebar"
            className={classnames(cls.Sidebar, { [cls.collpase]: collapsed }, [className])}
        >

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
