import classnames from 'shared/lib/classnames/classnames';

describe('classNames', () => {
    test('cls option test', () => {
        expect(classnames('class')).toBe('class');
    });

    test('additional option test', () => {
        expect(classnames('class', {}, ['class1', 'class2'])).toBe('class class1 class2');
    });

    test('mods option test', () => {
        expect(classnames('class', { hovered: true }, ['class1 class2'])).toBe('class class1 class2 hovered');
    });
});
