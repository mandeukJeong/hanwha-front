import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../constants/colors';
import vote_end from '../../assets/vote_end.png';

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
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 60px;
`;
const VoteImage = styled.img`
  width: 20%;
  margin-bottom: 60px;
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

const VoteEnd = () => {
  return (
    <VoteWrap>
      <TitleText>모든 투표가 끝났어요.</TitleText>
      <VoteImage src={vote_end} alt="투표 종료" />
      <SubText>수리들이 뽑은 선수들의 순위를 확인하러 갈까요?</SubText>
      <CommonLink>GO TO RANK</CommonLink>
    </VoteWrap>
  );
};

export default VoteEnd;
