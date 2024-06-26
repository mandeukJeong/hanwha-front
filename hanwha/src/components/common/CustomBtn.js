import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const Button = styled(Link)`
  color: ${(props) => props.$fontColor};
  border: 1px solid ${(props) => props.$border};
  border-radius: 5px;
  display: inline-block;
  height: ${(props) => props.$height};
  line-height: ${(props) => props.$height};
  padding: ${(props) => props.$padding};
  font-size: ${(props) => props.$fontSize};
  font-weight: 400;
  background: linear-gradient(
    to right,
    ${(props) => props.$bgColor} 50%,
    rgba(0, 0, 0, 0) 50%
  );
  background-size: 210% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    border: 1px solid ${(props) => props.$bgColor};
    color: ${COLORS.white};
    background-position: left bottom;
  }
`;

const CustomBtn = ({
  $border,
  $height,
  $padding,
  $fontSize,
  $fontColor,
  $bgColor,
  text,
  to,
}) => {
  return (
    <Button
      to={to}
      $border={$border}
      $height={$height}
      $padding={$padding}
      $fontSize={$fontSize}
      $fontColor={$fontColor}
      $bgColor={$bgColor}
    >
      {text}
    </Button>
  );
};

export default CustomBtn;
