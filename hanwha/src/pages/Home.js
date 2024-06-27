import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants/colors';
import IntroduceWrap from '../components/home/IntroduceWrap';
import OrangeWrap from '../components/home/OrangeWrap';
import PlayerWrap from '../components/home/PlayerWrap';

const HomeWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
`;

const Home = () => {
  return (
    <HomeWrap>
      <IntroduceWrap />
      <OrangeWrap />
      <PlayerWrap />
    </HomeWrap>
  );
};

export default Home;
