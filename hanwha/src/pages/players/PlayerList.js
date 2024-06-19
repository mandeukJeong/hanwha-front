import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../constants/colors';
import player_title from '../../assets/player_title.jpg';
import pitcher from '../../assets/pitcher.png';
import catcher from '../../assets/catcher.png';
import infielder from '../../assets/infielder.png';
import outfielder from '../../assets/outfielder.png';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const PlayerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 75.05px;
  background-color: ${COLORS.black};
`;
const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  margin-top: 20px;
  margin-bottom: 50px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${player_title});
  background-size: cover;
  background-position: 0 30%;
`;
const TitleText = styled.h1`
  color: ${COLORS.orange};
  font-size: 50px;
  font-weight: 900;
  letter-spacing: -4px;
  text-shadow: 0 0 5px ${COLORS.orange};
  margin-left: 30px;
  animation: ${fadeIn} 2s ease-in-out forwards;
`;
const ListWrap = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding: 0 50px;
  padding-bottom: 50px;
`;
const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 45%;
  height: 400px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
`;
const CategoryText = styled.h1`
  color: ${COLORS.white};
  font-weight: 900;
  font-size: 40px;
`;
const CommonLink = styled(Link)`
  border: 2px solid ${COLORS.grey};
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
    border: 2px solid ${COLORS.orange};
    background-position: left bottom;
  }
`;

const PlayerList = () => {
  return (
    <PlayerWrap>
      <TitleWrap>
        <TitleText>PLAYERS</TitleText>
      </TitleWrap>
      <ListWrap>
        <ListItem $bg={pitcher}>
          <CategoryText>PITCHER</CategoryText>
          <CommonLink>GO TO LIST</CommonLink>
        </ListItem>
        <ListItem $bg={catcher}>
          <CategoryText>CATCHER</CategoryText>
          <CommonLink>GO TO LIST</CommonLink>
        </ListItem>
        <ListItem $bg={infielder}>
          <CategoryText>INFIELDER</CategoryText>
          <CommonLink>GO TO LIST</CommonLink>
        </ListItem>
        <ListItem $bg={outfielder}>
          <CategoryText>OUTFIELDER</CategoryText>
          <CommonLink>GO TO LIST</CommonLink>
        </ListItem>
      </ListWrap>
    </PlayerWrap>
  );
};

export default PlayerList;
