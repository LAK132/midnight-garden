import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Generated';
const colours = {
  black:        '#000000',
  grey:         '#808080',
  white:        '#FFFFFF',
  blue:         '#5555FF',
  dark_blue:    '#252580',
  red:          '#FF5555',
  dark_red:     '#802525',
  bright_green: '#80FF80',
  green:        '#55FF55',
  dark_green:   '#258025',
}

const colorSet: IColorSet = {
  base: {
    foreground: colours.dark_green,

    // background, comment, invisibles, guide
    background: colours.black,

    // boolean, identifier, keyword, storage, cssClass
    color1: colours.dark_green,

    // string, stringEscape, cssId
    color2: colours.bright_green,

    // function, class, classMember, type, cssTag
    color3: colours.dark_green,

    // functionCall, number
    color4: colours.red,
  },
  syntax: {
    comment: colours.grey,
    class: colours.red,
    number: colours.blue,
    keyword: colours.dark_red,
  },
  ui: {
    cursor: colours.dark_green,
  },
  overrides: {
    'editor.foreground': colours.bright_green,
  },
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
