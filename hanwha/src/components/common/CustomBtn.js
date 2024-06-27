import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const Button = styled(Link)`
  color: ${(props) => props.$fontColor};
  border: 1px solid ${(props) => props.$border};
  font-size: ${(props) => props.$fontSize};

  border-radius: 5px;
  display: inline-block;
  text-align: center;
  padding: 10px 40px;
  width: 90px;
  height: 30px;
  line-height: 30px;
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

const CustomBtn = ({ $border, $fontSize, $fontColor, $bgColor, text, to }) => {
  return (
    <Button
      to={to}
      $border={$border}
      $fontSize={$fontSize}
      $fontColor={$fontColor}
      $bgColor={$bgColor}
    >
      {text}
    </Button>
  );
};

export default CustomBtn;
