import React from 'react';
import styled from 'styled-components';
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
  padding: 50px 0;
  gap: 250px;
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
    </DetailWrap>
  );
};

export default PlayerDetail;
