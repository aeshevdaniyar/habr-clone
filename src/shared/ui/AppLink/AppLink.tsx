import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classnames from 'shared/lib/classnames/classnames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}
export interface AppLinkProps extends LinkProps{
    className?:string
    theme?:AppLinkTheme
}
const AppLink:FC<AppLinkProps> = (props) => {
    const {
        className, theme, children, ...otherProps
    } = props;
    return (
        <Link {...otherProps} className={classnames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};

export default AppLink;
