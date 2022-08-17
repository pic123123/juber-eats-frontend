import { MouseEventHandler } from 'react';
import styled from 'styled-components';

export default function ButtonComponent(props: IButtonProp) {
  return (
    <ButtonTag
      buttonType={props.buttonType}
      width={props.width}
      disabled={props.disabled || false}
      onClick={props.onClick}
      margin={props.margin}
      height={props.height}
      // className={`${props.Type} ${props.className}`}
    >
      {props.children}
    </ButtonTag>
  );
}

export interface IButtonProp {
  /**
   * 자식 Type
   */
  children?: React.ReactNode;

  /**
   * 선택불가처리
   */
  disabled?: boolean;

  type: string;

  /**
   * 너비 ( : 100%)
   */
  width?: 'xxs' | 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl';
  /**
   * 버튼 종류
   */
  buttonType:
    | 'deleteOutlined'
    | 'deleteContained'
    | 'mainOutlined'
    | 'mainContained'
    | 'smallOutlined'
    | 'smallDeleteOutlined'
    | 'smallMainOutlined'
    | 'smallContained';

  /**
   * onClick Event
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * 패딩 커스텀
   */
  margin?: 5 | 3;

  /**
   * 버튼 높이. 없으면 기본값 34px
   */
  height?: number;
}
export interface IButtonTag
  extends Pick<
    IButtonProp,
    'disabled' | 'width' | 'buttonType' | 'onClick' | 'margin' | 'height'
  > {}

export const ButtonTag = styled.button<IButtonTag>`
  border: none;
  border-radius: 4px;
  margin: ${({ margin }) => (margin ? `${margin}px ${margin}px` : `3px 5px`)};

  ${({ disabled, buttonType, theme }) =>
    disabled && buttonType.includes('Outlined')
      ? `
      background: white;
      color: ${theme.color.disabledText};
      fill: ${theme.color.disabledText};
      stroke: ${theme.color.disabledText};
      border: 1px solid ${theme.color.disabledText};
      `
      : disabled && buttonType.includes('Contained')
      ? `
      background: ${theme.color.disabledButton};
      color: ${theme.color.disabledText};
      fill: ${theme.color.disabledText};
      stroke: ${theme.color.disabledText};
      `
      : buttonType === 'deleteContained'
      ? ``
      : buttonType === 'deleteOutlined'
      ? `
        background: #fff;
        color: #777;
        fill: #fff;
        stroke: #999;
        border: 1px solid #999;
      `
      : buttonType === 'mainContained'
      ? `
      background: ${theme.color.point};
      color: white;
      fill: white;
      stroke: white;
      `
      : buttonType === 'mainOutlined'
      ? `
      background: white;
      color: ${theme.color.point};
      fill: ${theme.color.point};
      stroke: ${theme.color.point};
      border: 1px solid ${theme.color.point};
      `
      : buttonType === 'smallOutlined'
      ? `
      background: white;
      color: ${theme.color.point2};
      fill: ${theme.color.point2};
      stroke: ${theme.color.point2};
      border: 1px solid ${theme.color.point2};
      `
      : buttonType === 'smallDeleteOutlined'
      ? `
      background: white;
      color: #777;
      fill: #fff;
      stroke: #999;
      border: 1px solid #999;
      `
      : buttonType === 'smallMainOutlined'
      ? `
      background: white;
      color: ${theme.color.point};
      fill: #fff;
      stroke: #999;
      border: 1px solid ${theme.color.point};
      `
      : buttonType === 'smallContained'
      ? `
      background: #0072C3;
      color: #fff;
      fill: #0072C3;
      stroke: #0072C3;
      border: 1px solid #0072C3;
      `
      : ``}

  min-width:${({ theme, width }) =>
    width
      ? typeof width === 'number'
        ? `${width}px`
        : Object.keys(theme.defaultWidth).includes(width)
        ? `${(theme.defaultWidth as any)[width]}px`
        : width
      : `auto`};

  padding: ${({ buttonType }) =>
    buttonType.includes('small')
      ? `
    3px 14px
  `
      : '0'};

  height: ${({ theme, buttonType, height }) =>
    buttonType.includes('small')
      ? `
    auto
  `
      : height
      ? height
      : theme.defaultHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  &:not(:disabled):active {
    opacity: 0.5;
  }
`;
