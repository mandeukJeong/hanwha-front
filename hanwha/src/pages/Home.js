import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../components/common/Header';
import main_bg from '../assets/main_bg.png';
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
  height: calc(100vh - 75.05px);
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

const Home = () => {
  return (
    <>
      <MainWrap>
        <Header />
        <IntroduceWrap>
          <DifferentText>DIFFERENT</DifferentText>
          <DifferentText>US</DifferentText>
        </IntroduceWrap>
      </MainWrap>
    </>
  );
};

export default Home;
