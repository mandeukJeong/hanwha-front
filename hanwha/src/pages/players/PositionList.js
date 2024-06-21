import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../constants/colors';
import Ryu from '../../assets/Ryu.png';
import Moon from '../../assets/Moon.png';
import Lee from '../../assets/Lee.png';

const PositionWrap = styled.div`
  width: 100%;
  background-color: ${COLORS.black};
  padding: 75.05px 20px 50px 20px;
`;
const TitleText = styled.h1`
  margin: 30px 0;
  color: ${COLORS.white};
  font-size: 30px;
  font-weight: 900;
`;
const ListWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
`;
const PlayerWrap = styled.div`
  width: 30%;
`;
const PlayerImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.$bg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
  transition: all 1s ease-in-out;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.$bg});
    a {
      display: inline-block;
    }
  }
`;
const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 100px;
  h2 {
    color: ${COLORS.grey};
    font-size: 60px;
    font-weight: 800;
  }
`;
const NameWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
  height: 60px;
  h3 {
    color: ${COLORS.white};
    font-size: 20px;
    font-weight: 500;
  }
  h4 {
    color: ${COLORS.grey};
    font-size: 18px;
  }
`;
const CommonLink = styled(Link)`
  display: none;
  border: 1px solid ${COLORS.grey};
  border-radius: 5px;
  padding: 14px 40px;
  text-decoration: none;
  color: ${COLORS.white};
  font-size: 13px;
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
    border: 1px solid ${COLORS.orange};
    background-position: left bottom;
  }
`;

const PositionList = () => {
  return (
    <PositionWrap>
      <TitleText>PITCHER</TitleText>
      <ListWrap>
        <PlayerWrap>
          <PlayerImageWrap $bg={Ryu}>
            <CommonLink>PROFILE</CommonLink>
          </PlayerImageWrap>
          <InfoWrap>
            <h2>99</h2>
            <NameWrap>
              <h3>류현진</h3>
              <h4>RYU HYUN JIN</h4>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImageWrap $bg={Moon}>
            <CommonLink>PROFILE</CommonLink>
          </PlayerImageWrap>
          <InfoWrap>
            <h2>1</h2>
            <NameWrap>
              <h3>문동주</h3>
              <h4>MOON DONG JU</h4>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImageWrap $bg={Lee}>
            <CommonLink>PROFILE</CommonLink>
          </PlayerImageWrap>
          <InfoWrap>
            <h2>4</h2>
            <NameWrap>
              <h3>이승관</h3>
              <h4>LEE SEONG GWAN</h4>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImageWrap $bg={Ryu}>
            <CommonLink>PROFILE</CommonLink>
          </PlayerImageWrap>
          <InfoWrap>
            <h2>99</h2>
            <NameWrap>
              <h3>류현진</h3>
              <h4>RYU HYUN JIN</h4>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImageWrap $bg={Moon}>
            <CommonLink>PROFILE</CommonLink>
          </PlayerImageWrap>
          <InfoWrap>
            <h2>1</h2>
            <NameWrap>
              <h3>문동주</h3>
              <h4>MOON DONG JU</h4>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImageWrap $bg={Lee}>
            <CommonLink>PROFILE</CommonLink>
          </PlayerImageWrap>
          <InfoWrap>
            <h2>4</h2>
            <NameWrap>
              <h3>이승관</h3>
              <h4>LEE SEONG GWAN</h4>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImageWrap $bg={Ryu}>
            <CommonLink>PROFILE</CommonLink>
          </PlayerImageWrap>
          <InfoWrap>
            <h2>99</h2>
            <NameWrap>
              <h3>류현진</h3>
              <h4>RYU HYUN JIN</h4>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImageWrap $bg={Moon}>
            <CommonLink>PROFILE</CommonLink>
          </PlayerImageWrap>
          <InfoWrap>
            <h2>1</h2>
            <NameWrap>
              <h3>문동주</h3>
              <h4>MOON DONG JU</h4>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImageWrap $bg={Lee}>
            <CommonLink>PROFILE</CommonLink>
          </PlayerImageWrap>
          <InfoWrap>
            <h2>4</h2>
            <NameWrap>
              <h3>이승관</h3>
              <h4>LEE SEONG GWAN</h4>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
      </ListWrap>
    </PositionWrap>
  );
};

export default PositionList;
