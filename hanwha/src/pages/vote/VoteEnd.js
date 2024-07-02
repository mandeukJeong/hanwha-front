import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import CustomBtn from '../../components/common/CustomBtn';
import vote_end from '../../assets/vote/vote_end.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const neon = keyframes`
  0% {
    filter: drop-shadow(0 0 2px ${COLORS.orange});
  }
  50% {
    filter: drop-shadow(0 0 10px ${COLORS.orange});
  }
  100% {
    filter: drop-shadow(0 0 2px ${COLORS.orange});
  }
`;
const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
`;
const MainSection = styled.section`
  animation: ${fadeIn} 1s ease-in-out forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  ${mediaMax.medium`
    justify-content: center;
    padding: 100px 0;
    height: calc(100vh - 445px);
  `};
  ${mediaMax.small`
    height: calc(100vh - 350px);
  `};
`;
const TitleText = styled.h1`
  font-weight: 700;
  font-size: ${SIZES.ltxlarge};
  padding-bottom: 50px;
  ${mediaMax.medium`
    padding-bottom: 60px;
  `};
  ${mediaMax.small`
    font-size: ${SIZES.tbxlarge};
    padding-bottom: 35px;
  `};
`;
const VoteImg = styled.img`
  animation: ${neon} 3s infinite ease-in-out;
  width: 20%;
  margin-bottom: 50px;
  ${mediaMax.medium`
    width: 40%;
  `};
  ${mediaMax.small`
    width: 50%;
    margin-bottom: 45px;
  `};
`;
const SubText = styled.h2`
  font-weight: 600;
  font-size: ${SIZES.ltmedium};
  margin-bottom: 50px;
  ${mediaMax.small`
    font-size: ${SIZES.tbmedium};
    margin-bottom: 35px;
  `};
`;
const VoteEnd = () => {
  return (
    <MainWrap>
      <MainSection>
        <TitleText>모든 투표가 끝났어요.</TitleText>
        <VoteImg src={vote_end} alt="투표 종료" />
        <SubText>수리들이 뽑은 선수들의 순위를 확인하러 갈까요?</SubText>
        <CustomBtn
          to="/vote/result"
          $border={COLORS.orange}
          $fontColor={COLORS.orange}
          $bgColor={COLORS.orange}
          text="GO TO RANK"
        />
      </MainSection>
    </MainWrap>
  );
};

export default VoteEnd;
