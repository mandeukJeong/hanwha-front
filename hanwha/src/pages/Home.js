import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants/colors';
import IntroduceWrap from '../components/home/IntroduceWrap';

const HomeWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
`;

const Home = () => {
  return (
    <HomeWrap>
      <IntroduceWrap />
    </HomeWrap>
  );
};

export default Home;
