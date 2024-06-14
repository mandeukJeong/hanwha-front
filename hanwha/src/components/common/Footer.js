import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import hanwha_symbol from '../../assets/hanwha_symbol.png';

const FooterWrap = styled.div`
  width: 100%;
  padding: 20px 30px;
  background-color: ${COLORS.dark};
`;
const FooterTitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 15px;

  img {
    width: 60px;
  }
  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${COLORS.white};
  }
`;
const FooterContentWrap = styled.div`
  p {
    color: ${COLORS.grey};
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <FooterTitleWrap>
        <img src={hanwha_symbol} alt="한화 심볼 이미지" />
        <h3>Hanwha Eagles Fan</h3>
      </FooterTitleWrap>
      <FooterContentWrap>
        <p>정민서</p>
        <p>EMAIL wjdalstj337@naver.com</p>
        <p>DESIGN REFERENCE https://www.hanwhaeagles.co.kr/index.do</p>
      </FooterContentWrap>
    </FooterWrap>
  );
};

export default Footer;
