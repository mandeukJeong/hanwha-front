import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import CustomBtn from '../../components/common/CustomBtn';
import produce_101 from '../../assets/common/produce_101.png';

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
    padding: 100px 0;
  `};
`;
const TitleText = styled.h1`
  font-weight: 700;
  font-size: ${SIZES.ltxlarge};
  padding-bottom: 30px;
  ${mediaMax.medium`
    padding-bottom: 40px;
  `};
  ${mediaMax.small`
    font-size: ${SIZES.tbxlarge};
    padding-bottom: 35px;
  `};
`;
const ProduceImg = styled.img`
  animation: ${neon} 3s infinite ease-in-out;
  width: 40%;
  margin-bottom: 40px;
  ${mediaMax.medium`
    width: 75%;
    margin-bottom: 50px;
  `};
  ${mediaMax.small`
    width: 80%;
    margin-bottom: 45px;
  `};
`;
const SubText = styled.h2`
  font-weight: 600;
  font-size: ${SIZES.ltmedium};
  margin-bottom: 40px;
  ${mediaMax.medium`
    margin-bottom: 40px;
  `};
  ${mediaMax.small`
    font-size: ${SIZES.tbmedium};
    margin-bottom: 35px;
  `};
`;
const VotePage = () => {
  return (
    <MainWrap>
      <MainSection>
        <TitleText>당신의 선수에게 투표하세요.</TitleText>
        <ProduceImg src={produce_101} alt="produce 101" />
        <SubText>지금 같이 투표하러 갈까요?</SubText>
        <CustomBtn
          to="/vote/list"
          $border={COLORS.orange}
          $fontColor={COLORS.orange}
          $bgColor={COLORS.orange}
          text="START"
        />
      </MainSection>
    </MainWrap>
  );
};

export default VotePage;
