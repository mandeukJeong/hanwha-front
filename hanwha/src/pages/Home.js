import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../constants/colors';
import { SIZES } from '../constants/size';
import { mediaMax, mediaMin } from '../utils/media';
import main_bg from '../assets/main_bg.jpeg';
import player_collection from '../assets/player_collection.png';
import soori from '../assets/soori.png';
import produce_101 from '../assets/produce_101.png';
import vote_player from '../assets/vote_player.png';
import CustomBtn from '../components/common/CustomBtn';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const HomeWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
`;
const IntroWrap = styled.section`
  height: calc(100vh - 76px);
  ${mediaMax.small`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;
const IntroMainBg = styled.div`
  position: relative;
  background-image: url(${main_bg});
  background-size: cover;
  background-position: center;
  ${mediaMin.large`
    height: 100%;
  `}
  ${mediaMax.small`
    height: 50%;
  `}
`;
const IntroTint = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.67);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IntroText = styled.div`
  display: inline-flex;
  gap: 0.3em;
  font-weight: 800;
  text-shadow: 0 0 6px ${COLORS.white};
  animation: ${fadeIn} 2s ease-in-out forwards;
  span {
    &:last-child {
      color: ${COLORS.orange};
      text-shadow: 0 0 6px ${COLORS.orange};
    }
  }
  ${mediaMin.large`
    letter-spacing: -10px;
    font-size: ${SIZES.xlarge};
  `}
  ${mediaMax.small`
    letter-spacing: -5px;
    font-size: ${SIZES.mdlarge};
  `}
`;
const CommonSection = styled.section`
  ${mediaMin.large`
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 76px);
  `}
  ${mediaMax.small`
    padding: 30px;
  `}
`;
const ContentWrap = styled.div`
  ${mediaMax.small`
    text-align: center;
  `}
  h1 {
    color: ${COLORS.orange};
    font-family: 'Audiowide', sans-serif;
    font-size: ${SIZES.smlarge};
    margin-bottom: 30px;
    ${mediaMax.small`
      display: none;
    `}
  }
  h2 {
    ${mediaMin.large`
      font-weight: 700;
      font-size: ${SIZES.title};
      letter-spacing: -0.5px;
      margin-bottom: 30px;
    `}
    ${mediaMax.small`
      text-align: start;
      font-size: ${SIZES.xslarge};
      font-weight: 600;
      margin-bottom: 30px;
    `}
  }
  p {
    ${mediaMin.large`
      font-weight: 600;
      letter-spacing: -0.3px;
      color: ${COLORS.grey};
      font-size: ${SIZES.large};
      margin-bottom: 50px;
    `}
    ${mediaMax.small`
      font-size: ${SIZES.small};
      font-weight: 500;
      margin-bottom: 30px;
    `}
  }
  a {
    ${mediaMax.small`
      display: none;
    `}
  }
`;
const SooriImg = styled.img`
  width: 40%;
  margin-bottom: 30px;
  ${mediaMin.large`
    display: none;
  `}
`;
const CommonTint = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: ${(props) => props.$align};
  justify-content: center;
  a {
    margin-bottom: 5em;
  }
  ${mediaMin.large`
    display: none;
  `}
`;
const ImageWrap = styled.div`
  ${mediaMin.large`
    width: 40%;
  `}
  ${mediaMax.small`
    width: 100%;
    margin-bottom: 30px;
    &:first-child {
      display: none;
    }
  `}
`;
const CustomImg = styled.div`
  background-image: url(${(props) => props.$bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  ${mediaMin.large`
    height: 50vh;
  `}
  ${mediaMax.small`
    width: 100%;
    height: 30vh;
    position: relative;
  `}
`;
const LinkWrap = styled.div`
  display: inline-flex;
  gap: 50px;
`;
const VoteImg = styled.div`
  background-image: url(${vote_player});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  height: 20vh;
  margin-bottom: 30px;
  ${mediaMin.large`
    display: none;
  `}
`;
const VoteText = styled.div`
  display: inline-flex;
  gap: 0.3em;
  font-weight: 800;
  text-shadow: 0 0 6px ${COLORS.white};
  letter-spacing: -5px;
  font-size: ${SIZES.mdlarge};
  span {
    &:last-child {
      color: ${COLORS.orange};
      text-shadow: 0 0 6px ${COLORS.orange};
    }
  }
`;

const Home = () => {
  return (
    <HomeWrap>
      <IntroWrap>
        <IntroMainBg>
          <IntroTint>
            <IntroText>
              <span>DIFFERENT</span>
              <span>US</span>
            </IntroText>
          </IntroTint>
        </IntroMainBg>
      </IntroWrap>
      <CommonSection>
        <ContentWrap>
          <h1>PLAYERS</h1>
          <h2>
            내가 우리 선수들을
            <br />
            소개해줄게!
          </h2>
          <SooriImg src={soori} alt="수리 이미지" />
          <p>
            수리가 우리 선수단의 정보를 수집했어요!
            <br />
            한화 이글스의 투수, 포수, 내야수, 외야수를 만나러 가요.
          </p>
          <CustomBtn
            to="/players"
            $border={COLORS.grey}
            $height="25px"
            $padding="10px 30px"
            $fontSize={SIZES.medium}
            $bgColor={COLORS.orange}
            text="GO TO LIST"
          />
        </ContentWrap>
        <ImageWrap>
          <CustomImg $bg={player_collection}>
            <CommonTint $align="flex-end">
              <CustomBtn
                to="/players"
                $border={COLORS.grey}
                $height="10px"
                $padding="10px 20px"
                $fontSize={SIZES.xsmall}
                $bgColor={COLORS.orange}
                text="GO TO LIST"
              />
            </CommonTint>
          </CustomImg>
        </ImageWrap>
      </CommonSection>
      <CommonSection>
        <ImageWrap>
          <CustomImg $bg={produce_101} />
        </ImageWrap>
        <ContentWrap>
          <h1>VOTE</h1>
          <h2>
            당신의 선수에게
            <br />
            투표하세요!
          </h2>
          <VoteImg>
            <CommonTint $align="center">
              <VoteText>
                <span>LET'S</span>
                <span>VOTE</span>
              </VoteText>
            </CommonTint>
          </VoteImg>
          <p>
            매일, 매순간 행복을 가져다 준
            <br />
            당신의 선수에게 소중한 한 표를 전달해주세요!
          </p>
          <LinkWrap>
            <CustomBtn
              to="/vote"
              $border={COLORS.grey}
              $height="25px"
              $padding="10px 30px"
              $fontSize={SIZES.medium}
              $fontColor={COLORS.white}
              $bgColor={COLORS.orange}
              text="GO TO VOTE"
            />
            <CustomBtn
              to="/vote/result"
              $border={COLORS.orange}
              $height="25px"
              $padding="10px 30px"
              $fontSize={SIZES.medium}
              $fontColor={COLORS.orange}
              $bgColor={COLORS.orange}
              text="GO TO RANK"
            />
          </LinkWrap>
        </ContentWrap>
      </CommonSection>
    </HomeWrap>
  );
};

export default Home;
