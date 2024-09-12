import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants/colors';
import { SIZES } from '../constants/size';
import { mediaMax } from '../utils/media';
import CustomLink from '../components/common/CustomLink';
import alert from '../assets/common/alert.png';

const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  ${mediaMax.medium`
    height: calc(100vh - 245px);
  `};
  ${mediaMax.small`
    height: calc(100vh - 76px);
  `};
`;
const MainSection = styled.section`
  background-color: ${COLORS.dark};
  text-align: center;
  padding: 100px;
  ${mediaMax.small`
    padding: 50px 30px;
  `};
  h1 {
    font-weight: 600;
    font-size: ${SIZES.ltlarge};
    ${mediaMax.small`
      font-size: ${SIZES.tbmedium};
    `};
  }
  p {
    color: ${COLORS.grey};
    font-size: ${SIZES.ltsmall};
    margin-bottom: 50px;
    ${mediaMax.small`
      font-size: ${SIZES.tbsmall};
      margin-bottom: 30px;
    `};
  }
`;
const AlertImg = styled.img`
  width: 256px;
  height: 256px;
  ${mediaMax.small`
    width: 128px;
    height: 128px;
  `};
`;

const NotFound = () => {
  return (
    <MainWrap>
      <MainSection>
        <h1>요청하신 페이지를 찾을 수 없습니다.</h1>
        <AlertImg src={alert} alt="경고 이미지" />
        <p>
          찾으시는 페이지의 주소가 잘못 입력되었거나,
          <br />
          페이지의 주소가 변경 혹은 서버에서 삭제되었을 수 있습니다.
        </p>
        <CustomLink
          to="/"
          $border={COLORS.grey}
          $fontColor={COLORS.white}
          $bgColor={COLORS.orange}
          text="홈으로"
        />
      </MainSection>
    </MainWrap>
  );
};

export default NotFound;
