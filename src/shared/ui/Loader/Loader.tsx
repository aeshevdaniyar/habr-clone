import classnames from 'shared/lib/classnames/classnames';
import cls from './Loader.module.scss';

export interface LoaderProps {
    className?:string
}
const Loader = ({ className }:LoaderProps) => (
    <div className={classnames(cls.Loader, {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default Loader;
