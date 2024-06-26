import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import hanwha_symbol from '../../assets/logo/hanwha_symbol.png';

const FooterWrap = styled.footer`
  padding: 24px;
  background-color: ${COLORS.dark};
  color: ${COLORS.white};
`;
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  ${mediaMax.medium`
    margin-bottom: 20px;
  `};
`;
const LogoImg = styled.h1`
  display: inline-block;
  height: 50px;
  line-height: 50px;
  margin-right: 5px;
  ${mediaMax.medium`
    height: 30px;
    line-height: 30px;
  `};
  ${mediaMax.small`
    height: 25px;
    line-height: 25px;
  `};
  img {
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
    ${mediaMax.medium`
      height: 30px;
      line-height: 30px;
    `};
    ${mediaMax.small`
      height: 25px;
      line-height: 25px;
    `};
  }
`;
const LogoText = styled.h2`
  font-size: ${SIZES.ltmedium};
  font-weight: 700;
  ${mediaMax.medium`
    font-size: ${SIZES.tbmedium};
  `};
  ${mediaMax.small`
    font-size: ${SIZES.mbmedium};
  `};
`;
const FooterText = styled.p`
  color: ${COLORS.grey};
  font-size: ${SIZES.ltxsmall};
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  ${mediaMax.medium`
    font-size: ${SIZES.tbsmall};
  `};
  ${mediaMax.small`
    font-size: ${SIZES.mbsmall};
  `};
`;

const Footer = () => {
  return (
    <FooterWrap>
      <LogoWrap>
        <LogoImg>
          <img src={hanwha_symbol} alt="한화 심볼 이미지" />
        </LogoImg>
        <LogoText>Hanwha Eagles Fan</LogoText>
      </LogoWrap>
      <FooterText>정민서</FooterText>
      <FooterText>EMAIL wjdalstj337@naver.com</FooterText>
      <FooterText>
        DESIGN REFERENCE https://www.hanwhaeagles.co.kr/index.do
      </FooterText>
    </FooterWrap>
  );
};

export default Footer;
