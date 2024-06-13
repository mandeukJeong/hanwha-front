import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <>
      <MainWrap>
        <Header />
        <div>DIFFRENT US</div>
      </MainWrap>
    </>
  );
};

export default Home;
