import { DefaultTheme } from 'styled-components';

export const LightTheme: DefaultTheme = {
  // defaultHeight: {
  //   medium: '36px',
  // },
  // device: {
  //   maxWidth: '1200px',
  //   minWidth: '768px',
  //   mobile: 'screen and (max-width: 480px)',
  //   tablet: 'screen and (min-width: 768px) and (max-width: 1024px)',
  //   desktop: 'screen and (min-width: 1024px)',
  // },

  /**
   * Width(넓이) small | medium | large | xLarge | full
   */
  defaultWidth: {
    xxs: 34,
    xs: 94,
    small: 106,
    medium: 148,
    large: 184,
    xl: 276,
    xxl: 432,
    full: '100%',
  },

  defaultHeight: 34,

  color: {
    background: '#FAFAFA',
    surface: 'white',
    border: '#DEDEDF',
    borderActive: '#000000',

    disabled: '#F8F8F8',
    disabledButton: '#E0E1E2',
    disabledText: '#B0B0B0',
    disabledSelect: '#E0E1E2',

    placeholderText: '#CCCCCC',

    text: '#333333',

    point: '#0072CE',
    point2: '#63A2AD',

    tabBackground: '#e5e5e5',
    tabText: '#5A5A5A',

    accordionBackground: '#F4F4F4',
    accordionBackgroundBlue: '#EDF4FA',
    scrollbar: '#dddddd',

    tableHeaderText: '#788590',
    tableHeaderBackground: '#DDEDFA',
    tableBackground: '#F4FAFF',
    tableHoverBackground: '#DEFCFF',

    // box: '#FFFFFF',
    // boxCategory: '#F5F5F5',
    // tableCategory: '#f2f6fc',
    // select: '#DEFCFF',
    // point: '#0072CE',
    // point2: '#63A2AD',

    // mainFont: '#333333',
    // fontDisable: '#65748D',
    // placeholder: '#CCCCCC',
    // error: '#D60303',

    // borderDefault: '#DDDDDD',
    // borderActive: '#333333',
  },
};

// export const DarkTheme: DefaultTheme = {
//   /**
//    * small | medium | large | xLarge | full
//    */
//   // defaultSize: {
//   //   small: '96px',
//   //   medium: '172px',
//   //   large: '496px',
//   //   xLarge: '896px',
//   //   full: '100%',
//   // },
//   // defaultHeight: {
//   //   medium: '36px',
//   // },
//   // device: {
//   //   maxWidth: '1200px',
//   //   minWidth: '768px',
//   //   mobile: 'screen and (max-width: 480px)',
//   //   tablet: 'screen and (min-width: 768px) and (max-width: 1024px)',
//   //   desktop: 'screen and (min-width: 1024px)',
//   // },
//   color: {
//     background: '#18191F',
//   },
// };
