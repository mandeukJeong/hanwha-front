import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import produce_101 from '../../assets/common/produce_101.png';
import CustomLink from '../../components/common/CustomLink';
import { getVoteResult } from '../../services/vote';

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
  const params = useParams();
  const [voteList, setVoteList] = useState(null);

  useEffect(() => {
    getVoteResult(params.id)
      .then((response) => setVoteList(response.data))
      .catch((e) => console.log(e));
  }, [params]);

  return (
    <MainWrap>
      {voteList && (
        <>
          <TitleSection>
            <TitleImg src={produce_101} alt="produce 101" />
            <h1>{voteList.description}</h1>
          </TitleSection>
          <MainSection>
            {voteList.voted &&
              voteList.voted.map((item, i) => (
                <VoteWrap key={item.pCd}>
                  <PlayerImg $bg={item.img}>
                    <RankText>{i + 1}</RankText>
                  </PlayerImg>
                  <VoteText>
                    <h2>{item.pNm}</h2>
                    <p>{item.count}</p>
                  </VoteText>
                </VoteWrap>
              ))}
          </MainSection>
        </>
      )}
      <CustomLink
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
