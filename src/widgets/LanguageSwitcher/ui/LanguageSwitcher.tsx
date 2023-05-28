import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

export interface LanguageSwitcherProps {
    className?:string
}
const LanguageSwitcher = ({ className }:LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
            className={className}
        >
            {t('Русский')}
        </Button>
    );
};

export default LanguageSwitcher;
