import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const TitleSection = styled.section`
  background-color: ${COLORS.dark};
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 30px;
  ${mediaMax.small`
    padding: 25px;
  `};
  h2 {
    text-align: center;
    font-weight: 600;
    font-size: ${SIZES.ltlarge};
    margin: 10px 0;
    ${mediaMax.small`
      font-size: ${SIZES.tbmedium};
    `};
  }
`;
const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${SIZES.ltsmall};
  ${mediaMax.small`
    font-size: ${SIZES.tbsmall};
  `};
  h3 {
    color: ${COLORS.orange};
    font-weight: 600;
  }
  p {
    color: ${COLORS.grey};
  }
`;
const MainSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const ChatWrap = styled.div`
  overflow-y: auto;
  flex-grow: 1;
  padding: 30px;
  ${mediaMax.small`
    padding: 25px;
  `};
`;
const TextWrap = styled.div`
  display: ${(props) => (props.$isUser ? 'flex' : '')};
  justify-content: ${(props) => (props.$isUser ? 'flex-end' : '')};
  margin-bottom: 15px;
  ${mediaMax.small`
    margin-bottom: 10px;
  `};
  p {
    font-weight: 600;
    font-size: ${SIZES.ltsmall};
    margin-bottom: 10px;
    ${mediaMax.small`
      font-size: ${SIZES.tbsmall};
    `};
  }
`;
const ChatMsg = styled.div`
  background-color: ${(props) => (props.$isUser ? COLORS.dark : COLORS.grey)};
  align-self: ${(props) => (props.$isUser ? 'flex-end' : 'flex-start')};
  border-radius: 10px;
  max-width: 50%;
  display: inline-block;
  padding: 15px 20px;
  font-size: ${SIZES.ltsmall};
  ${mediaMax.small`
    padding: 12px 16px;
    font-size: ${SIZES.tbsmall};
  `};
`;
const SendWrap = styled.div`
  position: sticky;
  bottom: 0;
  background-color: ${COLORS.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  gap: 2em;
  ${mediaMax.small`
    padding: 15px 30px;
    gap: 1.5em;
  `};
`;
const SendInput = styled.input`
  border-radius: 10px;
  background-color: ${COLORS.white};
  border: none;
  flex-grow: 1;
  padding: 15px 20px;
  font-size: ${SIZES.ltsmall};
  ${mediaMax.small`
    font-size: ${SIZES.tbsmall};
  `};
`;

const ChatLive = () => {
  return (
    <MainWrap>
      <TitleSection>
        <InfoWrap>
          <h3>LIVE</h3>
          <FontAwesomeIcon icon={faX} size="lg" />
        </InfoWrap>
        <h2>한화 vs LG</h2>
        <InfoWrap>
          <p>2024.07.05 18:00</p>
          <p>256명</p>
        </InfoWrap>
      </TitleSection>
      <MainSection>
        <ChatWrap>
          <TextWrap $isUser={false}>
            <p>만득이</p>
            <ChatMsg $isUser={false}>안녕하세요! 만득이입니다.</ChatMsg>
          </TextWrap>
          <TextWrap $isUser={false}>
            <ChatMsg $isUser={false}>오늘 경기 어떠셨나요?</ChatMsg>
          </TextWrap>
          <TextWrap $isUser={true}>
            <ChatMsg $isUser={true}>오늘 경기 많이 힘들었습니다..</ChatMsg>
          </TextWrap>
          <TextWrap $isUser={true}>
            <ChatMsg $isUser={true}>오늘 경기 어떠셨나요?</ChatMsg>
          </TextWrap>
        </ChatWrap>
      </MainSection>
      <SendWrap>
        <SendInput />
        <FontAwesomeIcon icon={faPaperPlane} size="lg" />
      </SendWrap>
    </MainWrap>
  );
};

export default ChatLive;
