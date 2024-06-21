import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../constants/colors';
import Ryu from '../../assets/Ryu.png';

const DetailWrap = styled.div`
  width: 100%;
  padding-top: 75.05px;
  background-color: ${COLORS.black};
  padding: 75.05px 20px 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PlayerWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 50px 0 200px 0;
  gap: 200px;
  justify-content: center;
  img {
    width: 35%;
    max-width: 550px;
  }
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;
const NameWrap = styled.div`
  display: flex;
  color: ${COLORS.grey};
  gap: 10px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
  h2 {
    font-size: 80px;
    font-weight: 800;
  }
  h3 {
    font-size: 25px;
    color: ${COLORS.white};
  }
  h4 {
    font-size: 20px;
  }
`;
const PositionWrap = styled.div`
  color: ${COLORS.white};
  display: flex;
  align-items: center;
  gap: 10px;
  h3 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  h4 {
    font-size: 16px;
    font-weight: 400;
  }
`;
const PositionImg = styled.div`
  width: 95px;
  height: 95px;
  border-radius: 20px;
  background-color: ${COLORS.dark};
`;
const ProfileWrap = styled.div`
  display: flex;
  gap: 15px;
  h4 {
    color: ${COLORS.grey};
    font-size: 16px;
    font-weight: 600;
    width: 60px;
  }
  p {
    color: ${COLORS.white};
    font-size: 16px;
  }
`;
const SeasonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  h1 {
    color: ${COLORS.white};
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 50px;
  }
`;
const ScoreWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
`;
const ScoreGraph = styled.div`
  background-color: ${COLORS.dark};
  width: 30%;
  height: 300px;
  border-radius: 20px;
`;
const ScoreRate = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 0;
  gap: 50px;
  background-color: ${COLORS.dark};
  width: 40%;
  height: 300px;
  border-radius: 20px;
`;
const ScoreDetail = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  h3 {
    color: ${COLORS.orange};
    font-weight: 800;
    font-size: 30px;
  }
  h4 {
    color: ${COLORS.grey};
    font-weight: 700;
    font-size: 15px;
  }
`;
const CommonLink = styled(Link)`
  border: 2px solid ${COLORS.grey};
  border-radius: 5px;
  padding: 20px 50px;
  text-decoration: none;
  color: ${COLORS.white};
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
    border: 2px solid ${COLORS.orange};
    background-position: left bottom;
  }
`;

const PlayerDetail = () => {
  return (
    <DetailWrap>
      <PlayerWrap>
        <img src={Ryu} alt="류현진" />
        <InfoWrap>
          <NameWrap>
            <h2>99</h2>
            <div>
              <h3>류현진</h3>
              <h4>RYU HYUN JIN</h4>
            </div>
          </NameWrap>
          <PositionWrap>
            <PositionImg />
            <div>
              <h3>투수</h3>
              <h4>좌/우</h4>
            </div>
          </PositionWrap>
          <ProfileWrap>
            <h4>생년월일</h4>
            <p>1987.03.25</p>
          </ProfileWrap>
          <ProfileWrap>
            <h4>체격</h4>
            <p>187cm, 98kg</p>
          </ProfileWrap>
          <ProfileWrap>
            <h4>출신학교</h4>
            <p>인천 창영초-동산중-동산고-대전대</p>
          </ProfileWrap>
          <ProfileWrap>
            <h4>경력</h4>
            <p>한화-LA다져스-토론토</p>
          </ProfileWrap>
        </InfoWrap>
      </PlayerWrap>
      <SeasonWrap>
        <h1>2024 SEASON</h1>
        <ScoreWrap>
          <ScoreGraph></ScoreGraph>
          <ScoreRate>
            <ScoreDetail>
              <h3>5.91</h3>
              <h4>평균자책점</h4>
            </ScoreDetail>
            <ScoreDetail>
              <h3>1</h3>
              <h4>승</h4>
            </ScoreDetail>
            <ScoreDetail>
              <h3>3</h3>
              <h4>패</h4>
            </ScoreDetail>
            <ScoreDetail>
              <h3>31</h3>
              <h4>탈삼진</h4>
            </ScoreDetail>
            <ScoreDetail>
              <h3>32</h3>
              <h4>이닝</h4>
            </ScoreDetail>
            <ScoreDetail>
              <h3>0</h3>
              <h4>세이브</h4>
            </ScoreDetail>
          </ScoreRate>
        </ScoreWrap>
      </SeasonWrap>
      <CommonLink to="/player/pitcher">GO TO LIST</CommonLink>
    </DetailWrap>
  );
};

export default PlayerDetail;
