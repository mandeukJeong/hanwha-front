import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import produce_101 from '../../assets/common/produce_101.png';
import Hwang from '../../assets/vote/Hwang.png';

const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  padding: 50px 0 100px 0;
  ${mediaMax.small`
    padding: 30px 0 50px 0;
  `};
`;
const TitleSection = styled.section`
  text-align: center;
  margin-bottom: 50px;
  ${mediaMax.small`
    margin-bottom: 30px;
  `};
  h1 {
    font-weight: 600;
    font-size: ${SIZES.ltmedium};
    ${mediaMax.small`
      font-size: ${SIZES.mblarge};
    `};
    span {
      color: ${COLORS.orange};
    }
  }
`;
const MainSection = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5em;
  ${mediaMax.small`
    gap: 2.5em;
  `};
`;
const TitleImg = styled.img`
  filter: drop-shadow(0 0 5px ${COLORS.orange});
  width: 10%;
  margin-bottom: 20px;
  ${mediaMax.medium`
    width: 15%;
  `};
  ${mediaMax.small`
    width: 20%;
    margin-bottom: 15px;
  `};
`;
const VoteWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  border: 2px solid ${COLORS.grey};
  width: 20vw;
  height: 20vw;
  ${mediaMax.medium`
    width: 40vw;
    height: 40vw;
  `};
  &:hover {
    background-image: url(${(props) => props.$bg});
    color: ${COLORS.orange};
    text-shadow: 0 0 6px ${COLORS.orange};
    border: 2px solid ${COLORS.orange};
  }
`;
const VoteText = styled.span`
  font-weight: 700;
  text-shadow: 0 0 6px ${COLORS.white};
  font-size: ${SIZES.ltxlarge};
  ${mediaMax.small`
    font-size: ${SIZES.mbxlarge};
  `};
`;

const VoteResult = () => {
  return (
    <MainWrap>
      <TitleSection>
        <TitleImg src={produce_101} alt="produce 101" />
        <h1>
          수리들이 뽑은 <span>최고의 선수</span>들을 확인해보세요.
        </h1>
      </TitleSection>
      <MainSection>
        <VoteWrap $bg={Hwang}>
          <VoteText>PITCHER</VoteText>
        </VoteWrap>
        <VoteWrap $bg={Hwang}>
          <VoteText>PITCHER</VoteText>
        </VoteWrap>
        <VoteWrap $bg={Hwang}>
          <VoteText>PITCHER</VoteText>
        </VoteWrap>
        <VoteWrap $bg={Hwang}>
          <VoteText>PITCHER</VoteText>
        </VoteWrap>
        <VoteWrap $bg={Hwang}>
          <VoteText>PITCHER</VoteText>
        </VoteWrap>
        <VoteWrap $bg={Hwang}>
          <VoteText>PITCHER</VoteText>
        </VoteWrap>
      </MainSection>
    </MainWrap>
  );
};

export default VoteResult;
