import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import Hwang from '../../assets/Hwang.png';
import Ryu from '../../assets/players/Ryu.png';
import Moon from '../../assets/players/Moon.png';
import Lee from '../../assets/players/Lee.png';

const VoteWrap = styled.div`
  width: 100%;
  padding: 125.05px 50px 100px 50px;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  align-items: center;
  h1 {
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 80px;
  }
`;
const PlayerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -20px;
  width: 100%;
`;
const PlayerDetail = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 100px;
  p {
    font-size: 18px;
    font-weight: 500;
  }
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

  &:hover {
    border: 1px solid ${COLORS.orange};
    background-image: url(${(props) => props.$bg});
  }
`;
const ProgressText = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: ${COLORS.grey};
  margin-bottom: 50px;
`;
const LinkWrap = styled.div`
  display: flex;
  gap: 50px;
`;
const CommonLink = styled(Link)`
  border: 1px solid ${(props) => props.$border};
  border-radius: 5px;
  padding: 15px 0;
  width: 160px;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.$fontColor};
  font-size: 15px;
  font-weight: 300;
  background: linear-gradient(
    to right,
    ${COLORS.orange} 50%,
    ${COLORS.black} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  &:hover {
    border: 1px solid ${COLORS.orange};
    color: ${COLORS.white};
    background-position: left bottom;
  }
`;

const VoteList = () => {
  return (
    <VoteWrap>
      <h1>
        내가 바로 탱크!
        <br />
        당신의 투수를 투표해주세요.
      </h1>
      <PlayerList>
        <PlayerDetail>
          <PlayerImage $bg={Hwang} />
          <p>황준서</p>
        </PlayerDetail>
        <PlayerDetail>
          <PlayerImage $bg={Ryu} />
          <p>류현진</p>
        </PlayerDetail>
        <PlayerDetail>
          <PlayerImage $bg={Moon} />
          <p>문동주</p>
        </PlayerDetail>
        <PlayerDetail>
          <PlayerImage $bg={Lee} />
          <p>이승관</p>
        </PlayerDetail>
        <PlayerDetail>
          <PlayerImage $bg={Hwang} />
          <p>황준서</p>
        </PlayerDetail>
        <PlayerDetail>
          <PlayerImage $bg={Ryu} />
          <p>류현진</p>
        </PlayerDetail>
        <PlayerDetail>
          <PlayerImage $bg={Moon} />
          <p>문동주</p>
        </PlayerDetail>
        <PlayerDetail>
          <PlayerImage $bg={Lee} />
          <p>이승관</p>
        </PlayerDetail>
      </PlayerList>
      <ProgressText>1/10</ProgressText>
      <LinkWrap>
        <CommonLink $border={COLORS.grey} $fontColor={COLORS.white}>
          BEFORE
        </CommonLink>
        <CommonLink
          to="/vote/end"
          $border={COLORS.orange}
          $fontColor={COLORS.orange}
        >
          NEXT
        </CommonLink>
      </LinkWrap>
    </VoteWrap>
  );
};

export default VoteList;
