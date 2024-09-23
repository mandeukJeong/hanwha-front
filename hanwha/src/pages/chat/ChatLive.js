import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
  increaseMember,
  removeMember,
  getOneChatRoom,
  getChatMessage,
} from '../../services/chat';
import { getCookie } from '../../hooks/cookie';

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
    color: ${(props) => (props.$isLive ? COLORS.orange : COLORS.grey)};
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

const socket = io.connect('http://localhost:3000');

const ChatLive = () => {
  const [chatInfo, setChatInfo] = useState(null);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    socket.emit('ask-join', params.id);
    increaseMember(params.id)
      .then()
      .catch((e) => console.log(e));

    getOneChatRoom(params.id)
      .then((response) => setChatInfo(response.data))
      .catch((e) => console.log(e));

    getChatMessage(params.id)
      .then((response) => setMessages(response.data))
      .catch((e) => console.log(e));

    return () => {
      removeMember(params.id)
        .then()
        .catch((e) => console.log(e));
    };
  }, [params.id]);

  const onChange = (e) => {
    setChatInput(e.target.value);
  };

  useEffect(() => {
    socket.on('message-broadcast', (data) => {
      setMessages([...messages, data]);
    });
  }, [messages]);

  const onSend = () => {
    socket.emit('message-send', { room: params.id, message: chatInput });
    setChatInput('');
  };

  return (
    <MainWrap>
      <TitleSection>
        {chatInfo && (
          <>
            <InfoWrap $isLive={isSameDate(chatInfo.startDate)}>
              {isSameDate(chatInfo.startDate) ? <h3>LIVE</h3> : <h3>END</h3>}
              <FontAwesomeIcon
                icon={faX}
                size="lg"
                onClick={() => navigate('/chat')}
              />
            </InfoWrap>
            <h2>
              {chatInfo.ourTeam.teamNm} vs {chatInfo.vsTeam.teamNm}
            </h2>
            <InfoWrap>
              <p>{chatInfo.startDate}</p>
              <p>{chatInfo.member.length}명</p>
            </InfoWrap>
          </>
        )}
      </TitleSection>
      <MainSection>
        <ChatWrap>
          {messages &&
            messages.map((item, i) => (
              <TextWrap
                $isUser={getCookie('user') === item.who ? true : false}
                key={i}
              >
                {getCookie('user') !== item.who && <p>{item.nickname}</p>}
                <ChatMsg
                  $isUser={getCookie('user') === item.who ? true : false}
                >
                  {item.content}
                </ChatMsg>
              </TextWrap>
            ))}
        </ChatWrap>
      </MainSection>
      <SendWrap>
        <SendInput onChange={onChange} value={chatInput} />
        <FontAwesomeIcon icon={faPaperPlane} size="lg" onClick={onSend} />
      </SendWrap>
    </MainWrap>
  );
};

export default ChatLive;
