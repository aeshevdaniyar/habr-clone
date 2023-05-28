import { ButtonHTMLAttributes, FC } from 'react';
import classnames from 'shared/lib/classnames/classnames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?:string,
    theme?: ButtonTheme,
}
const Button:FC<ButtonProps> = ({
    className, children, theme, ...props
}) => (
    <button className={classnames(cls.Button, {}, [className, cls[theme]])} {...props}>
        {children}
    </button>
);

export default Button;
