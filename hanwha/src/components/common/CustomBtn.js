import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';

const Button = styled.button`
  all: unset;
  cursor: pointer;
  color: ${(props) => props.$fontColor};
  border: 1px solid ${(props) => props.$border};
  border-radius: 5px;
  text-align: center;
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
  padding: 10px 40px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-size: ${SIZES.ltsmall};
  ${mediaMax.medium`
    padding: 10px 30px;
    height: 25px;
    line-height: 25px;
    font-size: ${SIZES.tbmedium};
  `};
  ${mediaMax.small`
    padding: 8px 16px;
    width: 80px;
    height: 20px;
    line-height: 20px;
    font-size: ${SIZES.mbmedium};
  `};
`;

const CustomBtn = ({ $border, $fontColor, $bgColor, text, type, onClick }) => {
  return (
    <Button
      type={type}
      $border={$border}
      $fontColor={$fontColor}
      $bgColor={$bgColor}
      onClick={(e) => {
        onClick(e);
      }}
    >
      {text}
    </Button>
  );
};

export default CustomBtn;
