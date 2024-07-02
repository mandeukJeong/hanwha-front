import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import produce_101 from '../../assets/common/produce_101.png';
import Hwang from '../../assets/vote/Hwang.png';
import CustomBtn from '../../components/common/CustomBtn';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  padding: 50px 0 100px 0;
  text-align: center;
  ${mediaMax.small`
    padding: 30px 0 50px 0;
  `};
`;
const TitleSection = styled.section`
  animation: ${fadeIn} 1s ease-in-out forwards;
  text-align: center;
  margin-bottom: 50px;
  ${mediaMax.small`
    margin-bottom: 30px;
  `};
  h1 {
    font-weight: 600;
    font-size: ${SIZES.ltlarge};
    ${mediaMax.small`
      font-size: ${SIZES.mblarge};
    `};
  }
`;
const MainSection = styled.section`
  animation: ${fadeIn} 1s ease-in-out forwards;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4em;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  margin-bottom: 50px;
  ${mediaMax.medium`
    width: 40%;
  `};
  ${mediaMax.small`
    margin-bottom: 30px;
  `};
  &:first-child {
    width: 100%;
    span {
      background-color: ${COLORS.orange};
    }
  }
`;
const PlayerImg = styled.div`
  position: relative;
  background-image: url(${(props) => props.$bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  border: 2px solid ${COLORS.white};
  width: 20vw;
  height: 20vw;
  margin-bottom: 20px;
  ${mediaMax.medium`
    width: 40vw;
    height: 40vw;
  `};
  ${mediaMax.small`
    margin-bottom: 15px;
  `};
`;
const RankText = styled.span`
  position: absolute;
  background-color: ${COLORS.grey};
  border-radius: 10px;
  font-weight: 700;
  text-align: center;
  top: 0.5vw;
  left: 2vw;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: ${SIZES.ltlarge};
  ${mediaMax.small`
    width: 35px;
    height: 35px;
    line-height: 35px;
    font-size: ${SIZES.tblarge};
  `};
`;
const VoteText = styled.div`
  h2 {
    font-weight: 600;
    margin-bottom: 5px;
    font-size: ${SIZES.ltmedium};
    ${mediaMax.small`
      font-size: ${SIZES.tbmedium};
    `};
  }
  p {
    color: ${COLORS.grey};
    font-weight: 600;
    font-size: ${SIZES.ltsmall};
    ${mediaMax.small`
      font-size: ${SIZES.tbsmall};
    `};
  }
`;

const VoteRank = () => {
  return (
    <MainWrap>
      <TitleSection>
        <TitleImg src={produce_101} alt="produce 101" />
        <h1>야구는 투수놀이라고 하죠.</h1>
      </TitleSection>
      <MainSection>
        <VoteWrap>
          <PlayerImg $bg={Hwang}>
            <RankText>1</RankText>
          </PlayerImg>
          <VoteText>
            <h2>황준서</h2>
            <p>349239</p>
          </VoteText>
        </VoteWrap>
        <VoteWrap>
          <PlayerImg $bg={Hwang}>
            <RankText>1</RankText>
          </PlayerImg>
          <VoteText>
            <h2>황준서</h2>
            <p>349239</p>
          </VoteText>
        </VoteWrap>
        <VoteWrap>
          <PlayerImg $bg={Hwang}>
            <RankText>1</RankText>
          </PlayerImg>
          <VoteText>
            <h2>황준서</h2>
            <p>349239</p>
          </VoteText>
        </VoteWrap>
        <VoteWrap>
          <PlayerImg $bg={Hwang}>
            <RankText>1</RankText>
          </PlayerImg>
          <VoteText>
            <h2>황준서</h2>
            <p>349239</p>
          </VoteText>
        </VoteWrap>
        <VoteWrap>
          <PlayerImg $bg={Hwang}>
            <RankText>1</RankText>
          </PlayerImg>
          <VoteText>
            <h2>황준서</h2>
            <p>349239</p>
          </VoteText>
        </VoteWrap>
        <VoteWrap>
          <PlayerImg $bg={Hwang}>
            <RankText>1</RankText>
          </PlayerImg>
          <VoteText>
            <h2>황준서</h2>
            <p>349239</p>
          </VoteText>
        </VoteWrap>
      </MainSection>
      <CustomBtn
        to="/vote/result"
        $border={COLORS.orange}
        $fontColor={COLORS.orange}
        $bgColor={COLORS.orange}
        text="GO TO BACK"
      />
    </MainWrap>
  );
};

export default VoteRank;
