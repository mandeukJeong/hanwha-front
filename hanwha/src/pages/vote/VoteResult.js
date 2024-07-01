import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import produce_101 from '../../assets/common/produce_101.png';
import Hwang from '../../assets/Hwang.png';
import Ju from '../../assets/Ju.png';
import soori from '../../assets/players/soori.png';
import Choi from '../../assets/Choi.png';
import Perlaza from '../../assets/Perlaza.png';
import An from '../../assets/An.png';

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
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 80px;
    strong {
      color: ${COLORS.orange};
    }
  }
`;
const VoteList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -20px;
  width: 100%;
`;
const PlayerWrap = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;
const PlayerImage = styled.div`
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  border: 1px solid ${COLORS.grey};
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 25px;
    font-weight: 700;
    letter-spacing: -0.5px;
    text-shadow: 0 0 6px ${COLORS.white};
  }

  &:hover {
    border: 1px solid ${COLORS.orange};
    background-image: url(${(props) => props.$bg});
    h2 {
      color: ${COLORS.orange};
      text-shadow: 0 0 6px ${COLORS.orange};
    }
  }
`;

const VoteResult = () => {
  return (
    <VoteWrap>
      <img src={produce_101} alt="투표 이미지" />
      <h1>
        수리들이 뽑은 <strong>최고의 선수</strong>들을 확인해보세요.
      </h1>
      <VoteList>
        <PlayerWrap>
          <PlayerImage $bg={Hwang}>
            <h2>PITCHER</h2>
          </PlayerImage>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImage $bg={Ju}>
            <h2>BULLPEN</h2>
          </PlayerImage>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImage $bg={soori}>
            <h2>THE CUTEST</h2>
          </PlayerImage>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImage $bg={Choi}>
            <h2>CATCHER</h2>
          </PlayerImage>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImage $bg={Perlaza}>
            <h2>OUTFIELDER</h2>
          </PlayerImage>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImage $bg={An}>
            <h2>INFIELDER</h2>
          </PlayerImage>
        </PlayerWrap>
      </VoteList>
    </VoteWrap>
  );
};

export default VoteResult;
