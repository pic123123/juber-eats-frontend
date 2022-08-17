import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    defaultWidth: {
      xxs: number;
      xs: number;
      small: number;
      medium: number;
      large: number;
      xl: number;
      xxl: number;
      full: string;
    };
    defaultHeight: number;
    color: {
      background: string;
      surface: string;
      border: string;
      borderActive: string;

      disabled: string;
      disabledButton: string;
      disabledText: string;
      disabledSelect: string;

      placeholderText: string;

      text: string;

      point: string;
      point2: string;

      tabBackground: string;
      tabText: string;

      accordionBackground: string;
      accordionBackgroundBlue: string;
      scrollbar: string;

      tableHeaderText: string;
      tableHeaderBackground: string;
      tableBackground: string;
      tableHoverBackground: string;
    };
  }
}
