type Mods = Record<string, boolean | string>
const classnames = (cls: string, mods: Mods = {}, additional: string[] = []) => [cls,
    ...additional,
    ...Object.entries(mods)
        .filter(([key, value]) => !!value)
        .map(([cls]) => cls),
].join(' ');

export default classnames;
