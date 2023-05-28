import classnames from 'shared/lib/classnames/classnames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

export interface PageErrorProps {
    className?:string
}
const PageError = ({ className }:PageErrorProps) => {
    const { t } = useTranslation();
    return (
        <div className={classnames(cls.PageError, {}, [className])}>
            {t('Не предвиденная ошибка')}
        </div>
    );
};

export default PageError;
