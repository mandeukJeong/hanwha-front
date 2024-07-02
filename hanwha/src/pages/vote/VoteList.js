import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import CustomBtn from '../../components/common/CustomBtn';
import Hwang from '../../assets/vote/Hwang.png';

const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
`;
const MainSection = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  ${mediaMax.small`
    padding: 50px 0 30px 0;
  `};
`;
const TitleText = styled.h1`
  font-weight: 700;
  font-size: 30px;
  padding-bottom: 80px;
  ${mediaMax.small`
    font-size: 25px;
    padding-bottom: 50px;
  `};
`;
const VoteWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5em;
  padding-bottom: 50px;
  ${mediaMax.small`
    gap: 2.5em;
    padding-bottom: 30px;
  `};
`;
const VoteItem = styled.div`
  font-weight: 600;
  width: 20%;
  font-size: ${SIZES.ltmedium};
  ${mediaMax.medium`
    width: 40%;
  `};
  ${mediaMax.small`
    font-size: ${SIZES.tbmedium};
  `};
`;
const PlayerImg = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background-image: url(${(props) => props.$bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  border: 2px solid ${COLORS.grey};
  margin-bottom: 15px;
  &:hover {
    border: 2px solid ${COLORS.orange};
  }
`;
const ProgressText = styled.span`
  color: ${COLORS.grey};
  font-weight: 600;
  font-size: ${SIZES.ltmedium};
  ${mediaMax.small`
    font-size: ${SIZES.tbmedium};
  `};
`;
const LinkWrap = styled.div`
  display: flex;
  gap: 3em;
  padding: 50px 0;
  ${mediaMax.small`
    padding: 30px 0;
  `};
`;

const VoteList = () => {
  return (
    <MainWrap>
      <MainSection>
        <TitleText>
          내가 바로 탱크!
          <br />
          당신의 투수를 투표해주세요.
        </TitleText>
        <VoteWrap>
          <VoteItem>
            <PlayerImg $bg={Hwang}></PlayerImg>
            <span>황준서</span>
          </VoteItem>
          <VoteItem>
            <PlayerImg $bg={Hwang}></PlayerImg>
            <span>황준서</span>
          </VoteItem>
          <VoteItem>
            <PlayerImg $bg={Hwang}></PlayerImg>
            <span>황준서</span>
          </VoteItem>
          <VoteItem>
            <PlayerImg $bg={Hwang}></PlayerImg>
            <span>황준서</span>
          </VoteItem>
          <VoteItem>
            <PlayerImg $bg={Hwang}></PlayerImg>
            <span>황준서</span>
          </VoteItem>
          <VoteItem>
            <PlayerImg $bg={Hwang}></PlayerImg>
            <span>황준서</span>
          </VoteItem>
          <VoteItem>
            <PlayerImg $bg={Hwang}></PlayerImg>
            <span>황준서</span>
          </VoteItem>
          <VoteItem>
            <PlayerImg $bg={Hwang}></PlayerImg>
            <span>황준서</span>
          </VoteItem>
        </VoteWrap>
        <ProgressText>1/10</ProgressText>
        <LinkWrap>
          <CustomBtn
            to="/vote"
            $border={COLORS.grey}
            $fontColor={COLORS.white}
            $bgColor={COLORS.orange}
            text="BEFORE"
          />
          <CustomBtn
            to="/vote/end"
            $border={COLORS.orange}
            $fontColor={COLORS.orange}
            $bgColor={COLORS.orange}
            text="NEXT"
          />
        </LinkWrap>
      </MainSection>
    </MainWrap>
  );
};

export default VoteList;
