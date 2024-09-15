import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import CustomLink from '../../components/common/CustomLink';
import { getChatRoomList } from '../../services/chat';
import alert from '../../assets/common/alert.png';

const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  padding: 50px;
  min-height: calc(100vh - 384px);
  ${mediaMax.medium`
    min-height: calc(100vh - 345px);
  `};
  ${mediaMax.small`
    padding: 30px; 
    min-height: calc(100vh - 282px);
  `};
`;
const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  ${mediaMax.small`
    margin-bottom: 30px;
  `};
  h1 {
    font-weight: 700;
    font-size: 30px;
    ${mediaMax.small`
      font-size: 22px;
    `};
  }
`;
const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 50px;
`;
const RoomWrap = styled.div`
  text-align: center;
  background-color: ${COLORS.dark};
  border-radius: 10px;
  box-shadow: 20px 20px 50px rgba(38, 38, 38, 0.75);
  width: 40%;
  padding: 30px;
  ${mediaMax.medium`
    width: 100%;
  `};
  ${mediaMax.small`
    padding: 20px;
  `};
  h2 {
    text-align: start;
    color: ${COLORS.orange};
    font-weight: 600;
    font-size: ${SIZES.ltmedium};
    margin-bottom: 30px;
    ${mediaMax.small`
      font-size: ${SIZES.tbmedium};
      margin-bottom: 20px;
    `};
  }
`;
const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  ${mediaMax.small`
    margin-bottom: 20px;
  `};
  p {
    color: ${COLORS.grey};
    font-size: ${SIZES.ltsmall};
    ${mediaMax.small`
      font-size: ${SIZES.tbsmall};
    `};
  }
`;
const ScheduleWrap = styled.div`
  display: flex;
  align-items: center;
  text-align: start;
  gap: 20px;
  ${mediaMax.small`
    gap: 15px;
  `};
  img {
    width: 100px;
    ${mediaMax.small`
      width: 70px;
    `};
  }
  h3 {
    font-weight: 600;
    margin-top: 15px;
    font-size: ${SIZES.ltmedium};
    ${mediaMax.small`
      margin-top: 10px;
      font-size: ${SIZES.tbmedium};
    `};
  }
`;
const NoRoomWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.dark};
  border-radius: 10px;
  box-shadow: 20px 20px 50px rgba(38, 38, 38, 0.75);
  width: 40%;
  padding: 50px;
  ${mediaMax.medium`
    width: 100%;
  `};
  ${mediaMax.small`
    padding: 20px;
  `};
  p {
    font-weight: 600;
    font-size: ${SIZES.ltsmall};
    ${mediaMax.small`
      font-size: ${SIZES.tbsmall};
    `};
  }
  img {
    width: 100%;
    ${mediaMax.small`
      width: 50%;
    `};
  }
`;

const isSameDate = (date) => {
  const today = new Date();
  const inputDate = new Date(date);

  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  const inputYear = inputDate.getFullYear();
  const inputMonth = inputDate.getMonth() + 1;
  const inputDay = inputDate.getDate();

  return (
    todayYear === inputYear &&
    todayMonth === inputMonth &&
    todayDay === inputDay
  );
};

const ChatPage = () => {
  const [chatList, setChatList] = useState(null);

  useEffect(() => {
    getChatRoomList()
      .then((response) => setChatList(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <MainWrap>
      <TitleSection>
        <h1>CHAT LIVE</h1>
        <CustomLink
          to="/chat/new"
          $border={COLORS.grey}
          $fontColor={COLORS.white}
          $bgColor={COLORS.orange}
          text="NEW ROOM"
        />
      </TitleSection>
      <MainSection>
        {chatList ? (
          chatList.map((item) => (
            <RoomWrap>
              {isSameDate(item.startDate) && <h2>LIVE</h2>}
              <InfoWrap>
                <ScheduleWrap>
                  <img
                    src={item.vsTeam.emblem}
                    alt={`${item.vsTeam.teamNm} 엠블럼`}
                  />
                  <div>
                    <p>{item.startDate}</p>
                    <h3>
                      {item.ourTeam.teamNm} VS {item.vsTeam.teamNm}
                    </h3>
                  </div>
                </ScheduleWrap>
                <p>{item.connected}명</p>
              </InfoWrap>
              <CustomLink
                to={`/chat/live/${item._id}`}
                $border={COLORS.grey}
                $fontColor={COLORS.white}
                $bgColor={COLORS.orange}
                text="GO TO ROOM"
              />
            </RoomWrap>
          ))
        ) : (
          <NoRoomWrap>
            <p>
              현재 채팅방이 존재하지 않습니다.
              <br />
              새로운 채팅방이 생성될 때까지 기다려주세요!
            </p>
            <img src={alert} alt="채팅방 없음" />
            <CustomLink
              to="/"
              $border={COLORS.grey}
              $fontColor={COLORS.white}
              $bgColor={COLORS.orange}
              text="GO TO HOME"
            />
          </NoRoomWrap>
        )}
      </MainSection>
    </MainWrap>
  );
};

export default ChatPage;
