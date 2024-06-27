import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../constants/colors';
import { mediaMax } from '../../utils/media';

const marquee = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;
const OrangeSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${COLORS.orange};
  height: 15vh;
  overflow: hidden;
  white-space: nowrap;
  ${mediaMax.medium`
    height: 10vh;
  `};
`;
const HanwhaMsg = styled.div`
  position: absolute;
  font-family: 'Audiowide', sans-serif;
  font-size: 65px;
  color: ${COLORS.black};
  transform: translateX(100%);
  animation: ${marquee} 60s linear infinite;
  span {
    color: ${COLORS.white};
  }
  ${mediaMax.medium`
    font-size: 55px;
  `};
  ${mediaMax.small`
    font-size: 35px;
  `};
`;

const OrangeWrap = () => {
  return (
    <OrangeSection>
      <HanwhaMsg>
        Hanwha Eagles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>SINCE 1985</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hanwha
        Eagles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>SINCE 1985</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hanwha
        Eagles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>SINCE 1985</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hanwha
        Eagles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>SINCE 1985</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hanwha
        Eagles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>SINCE 1985</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hanwha
        Eagles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>SINCE 1985</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </HanwhaMsg>
    </OrangeSection>
  );
};

export default OrangeWrap;
