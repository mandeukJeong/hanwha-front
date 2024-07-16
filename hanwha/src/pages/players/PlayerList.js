import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax, mediaMin } from '../../utils/media';
import CustomBtn from '../../components/common/CustomBtn';
import player_headers from '../../assets/players/players_header.jpg';
import soori from '../../assets/players/soori.png';
import pitcher from '../../assets/players/pitcher.png';
import catcher from '../../assets/players/catcher.png';
import infielder from '../../assets/players/infielder.png';
import outfielder from '../../assets/players/outfielder.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  padding-top: 30px;
  padding-bottom: 3em;
`;
const HeaderSection = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${player_headers});
  background-size: cover;
  background-position: 0 30%;
  height: 120px;
  ${mediaMax.medium`
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 25vh;
    gap: 20px;
  `};
  ${mediaMax.small`
    height: 30vh;
    gap: 15px;
  `};
`;
const HeaderTitle = styled.h1`
  color: ${COLORS.orange};
  text-shadow: 0 0 5px ${COLORS.orange};
  font-weight: 900;
  font-size: 50px;
  letter-spacing: -3px;
  margin-left: 30px;
  ${mediaMin.large`
    line-height: 120px;
  `};
  ${mediaMax.medium`
    font-size: 60px;
    margin-left: 0;
  `};
  ${mediaMax.small`
    font-size: 45px;
  `};
`;
const SooriWrap = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: 10px;
  font-size: ${SIZES.tblarge};
  img {
    width: 130px;
    ${mediaMax.small`
      width: 100px;
    `};
  }
  ${mediaMax.small`
    font-size: ${SIZES.mbmedium};
  `};
  ${mediaMin.large`
    display: none;
  `};
`;
const PlayerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  width: 45%;
  height: 450px;
  ${mediaMax.medium`
    width: 95%;
    height: 400px;
  `};
  ${mediaMax.small`
    height: 250px;
  `};
  ${mediaMin.large`
    transition: all 350ms;
    &:hover {
      transform: scale(1.04);
    }
  `};
`;
const MainSection = styled.section`
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3em;
  gap: 50px;
  ${mediaMax.medium`
    gap: 100px;
  `};
  ${mediaMax.small`
    gap: 30px;
  `};
  ${mediaMin.large`
    &:hover ${PlayerWrap}:not(:hover) {
      transform: scale(0.9);
    }
    &:hover ${PlayerWrap}:not(:hover)::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `};
`;
const TitleWrap = styled.div`
  text-align: center;
  h2 {
    font-weight: 700;
    font-size: ${SIZES.ltxlarge};
    margin-bottom: 20px;
    ${mediaMax.medium`
      font-size: 50px;
      margin-bottom: 20px;
    `};
    ${mediaMax.small`
      font-size: ${SIZES.tbxlarge};
      margin-bottom: 15px;
    `};
  }
`;

const PlayerList = () => {
  return (
    <MainWrap>
      <HeaderSection>
        <HeaderTitle>PLAYERS</HeaderTitle>
        <SooriWrap>
          <p>수리랑 함께</p>
          <img src={soori} alt="수리 이미지" />
          <p>보러가자!</p>
        </SooriWrap>
      </HeaderSection>
      <MainSection>
        <PlayerWrap $bg={pitcher}>
          <TitleWrap>
            <h2>PITCHER</h2>
            <CustomBtn
              to="/players/pitcher"
              $border={COLORS.grey}
              $fontColor={COLORS.white}
              $bgColor={COLORS.orange}
              text="GO TO LIST"
            />
          </TitleWrap>
        </PlayerWrap>
        <PlayerWrap $bg={catcher}>
          <TitleWrap>
            <h2>CATCHER</h2>
            <CustomBtn
              to="/players/catcher"
              $border={COLORS.grey}
              $fontColor={COLORS.white}
              $bgColor={COLORS.orange}
              text="GO TO LIST"
            />
          </TitleWrap>
        </PlayerWrap>
        <PlayerWrap $bg={infielder}>
          <TitleWrap>
            <h2>INFIELDER</h2>
            <CustomBtn
              to="/players/infielder"
              $border={COLORS.grey}
              $fontColor={COLORS.white}
              $bgColor={COLORS.orange}
              text="GO TO LIST"
            />
          </TitleWrap>
        </PlayerWrap>
        <PlayerWrap $bg={outfielder}>
          <TitleWrap>
            <h2>OUTFIELDER</h2>
            <CustomBtn
              to="/players/outfielder"
              $border={COLORS.grey}
              $fontColor={COLORS.white}
              $bgColor={COLORS.orange}
              text="GO TO LIST"
            />
          </TitleWrap>
        </PlayerWrap>
      </MainSection>
    </MainWrap>
  );
};

export default PlayerList;
