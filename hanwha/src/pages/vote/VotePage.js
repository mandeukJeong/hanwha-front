import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../constants/colors';
import produce_101 from '../../assets/produce_101.png';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const VoteWrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 175.05px 0 100px 0;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleText = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;
const VoteImage = styled.img`
  width: 30%;
  margin-bottom: 40px;
  animation: ${fadeIn} 1s ease-in-out forwards;
  filter: drop-shadow(0 0 4px ${COLORS.orange});
`;
const SubText = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 40px;
`;
const CommonLink = styled(Link)`
  border: 1px solid ${COLORS.orange};
  border-radius: 5px;
  padding: 15px 50px;
  text-decoration: none;
  color: ${COLORS.orange};
  font-size: 15px;
  font-weight: 300;
  background: linear-gradient(
    to right,
    ${COLORS.orange} 50%,
    rgba(0, 0, 0, 0) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  &:hover {
    color: ${COLORS.white};
    background-position: left bottom;
  }
`;

const VotePage = () => {
  return (
    <VoteWrap>
      <TitleText>당신의 선수에게 투표하세요.</TitleText>
      <VoteImage src={produce_101} alt="투표 이미지" />
      <SubText>지금같이 투표하러 갈까요?</SubText>
      <CommonLink to="/vote/list">START</CommonLink>
    </VoteWrap>
  );
};

export default VotePage;
