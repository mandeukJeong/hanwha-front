import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import main_bg from '../assets/main_bg.jpeg';
import player_collection from '../assets/player_collection.png';
import soori from '../assets/soori.png';
import { COLORS } from '../constants/colors';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const IntroduceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${main_bg});
  background-size: cover;
  background-position: center;
`;
const DifferentText = styled.h1`
  color: ${COLORS.white};
  font-size: 100px;
  font-weight: 900;
  letter-spacing: -8.5px;
  text-shadow: 0 0 6px ${COLORS.white};
  opacity: 0;
  animation: ${fadeIn} 2s ease-in-out forwards;

  &:last-child {
    color: ${COLORS.orange};
    text-shadow: 0 0 6px ${COLORS.orange};
  }
`;
const TitleText = styled.h2`
  font-family: 'Audiowide', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  color: ${COLORS.orange};
  margin-bottom: 30px;
`;
const SubText = styled.h3`
  color: ${COLORS.white};
  font-weight: 600;
  font-size: 40px;
  margin-bottom: 30px;
  line-height: 1.3;
`;
const ContentText = styled.p`
  color: ${COLORS.grey};
  font-weight: 500;
  font-size: 20px;
  line-height: 1.3;
  margin-bottom: 30px;
`;
const PlayerWrap = styled.div`
  width: 100%;
  height: calc(100vh - 75.05px);
  background-color: ${COLORS.black};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;

  img {
    width: 50%;
  }
`;
const ContentWrap = styled.div`
  width: 45%;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  img {
    width: 10%;
  }
`;
const CommonLink = styled(Link)`
  border: 1px solid ${COLORS.grey};
  border-radius: 5px;
  padding: 12px 35px;
  text-decoration: none;
  color: ${COLORS.white};
  font-size: 15px;
`;

const Home = () => {
  return (
    <>
      <MainWrap>
        <Header />
        <IntroduceWrap>
          <DifferentText>DIFFERENT</DifferentText>
          <DifferentText>US</DifferentText>
        </IntroduceWrap>
        <PlayerWrap>
          <ContentWrap>
            <TitleText>PLAYERS</TitleText>
            <SubText>
              내가 우리 선수들을
              <br />
              소개해줄게!
            </SubText>
            <ContentText>
              수리가 우리 선수단의 정보를 수집했어요!
              <br />
              한화 이글스의 투수, 포수, 내야수, 외야수를 만나러 가요.
            </ContentText>
            <div>
              <CommonLink>GO TO LIST</CommonLink>
              <img src={soori} alt="수리" />
            </div>
          </ContentWrap>
          <img src={player_collection} alt="선수 이미지" />
        </PlayerWrap>
      </MainWrap>
    </>
  );
};

export default Home;
