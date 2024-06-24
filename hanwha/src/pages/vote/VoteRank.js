import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../constants/colors';
import produce_101 from '../../assets/produce_101.png';
import Hwang from '../../assets/Hwang.png';
import Ju from '../../assets/Ju.png';
import Moon from '../../assets/Moon.png';
import Ryu from '../../assets/Ryu.png';
import Lee from '../../assets/Lee.png';

const VoteWrap = styled.div`
  width: 100%;
  padding: 125.05px 50px 100px 50px;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  align-items: center;
  img {
    width: 8vw;
    margin-bottom: 30px;
  }
  h1 {
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 80px;
  }
`;
const VoteList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: -20px;
  width: 100%;
`;
const PlayerWrap = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  &:first-child {
    width: 100%;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    font-weight: 600;
    color: ${COLORS.grey};
  }
`;
const PlayerImage = styled.div`
  position: relative;
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  border: 2px solid ${COLORS.white};
  background-image: url(${(props) => props.$bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 20px;
`;
const RankWrap = styled.div`
  width: 3vw;
  height: 3vw;
  background-color: ${(props) => props.$rank};
  color: ${COLORS.white};
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 1.5vw;
  top: 0.5vw;
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

const VoteRank = () => {
  return (
    <VoteWrap>
      <img src={produce_101} alt="투표 이미지" />
      <h1>야구는 투수놀이라고 하죠.</h1>
      <VoteList>
        <PlayerWrap>
          <PlayerImage $bg={Hwang}>
            <RankWrap $rank={COLORS.orange}>1</RankWrap>
          </PlayerImage>
          <h2>황준서</h2>
          <p>349239</p>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImage $bg={Ryu}>
            <RankWrap $rank={COLORS.grey}>2</RankWrap>
          </PlayerImage>
          <h2>류현진</h2>
          <p>258903</p>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImage $bg={Moon}>
            <RankWrap $rank={COLORS.grey}>3</RankWrap>
          </PlayerImage>
          <h2>문동주</h2>
          <p>232398</p>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImage $bg={Ju}>
            <RankWrap $rank={COLORS.grey}>4</RankWrap>
          </PlayerImage>
          <h2>주현상</h2>
          <p>232343</p>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImage $bg={Lee}>
            <RankWrap $rank={COLORS.grey}>5</RankWrap>
          </PlayerImage>
          <h2>이승관</h2>
          <p>194839</p>
        </PlayerWrap>
      </VoteList>
      <CommonLink to="/vote/result">GO TO BACK</CommonLink>
    </VoteWrap>
  );
};

export default VoteRank;
