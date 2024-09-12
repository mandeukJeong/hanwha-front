import React, { useRef } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax, mediaMin } from '../../utils/media';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import CustomLink from '../common/CustomLink';
import chat from '../../assets/home/chat.png';

const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const ChatSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(80vh - 76px);
  gap: 3em;
  ${mediaMax.medium`
    height: calc(95vh - 76px);  
    flex-direction: column;
    gap: 2.5em;
  `};
  ${mediaMax.small`
    gap: 2em;
  `};
`;
const AnimatedWrap = styled.div`
  opacity: 0;
  transition: opacity 1s ease-out, transform 1s ease-out;
  ${fadeInUp}
  &.animation {
    opacity: 1;
    animation: fadeInUp 1s ease-out forwards;
  }
`;
const TextWrap = styled(AnimatedWrap)`
  ${mediaMax.medium`
    width: 100%;
    height: auto;
    padding: 0 2em;
    order: 2;
  `};
  ${mediaMax.small`
    padding: 0 1em;
  `};
  ${mediaMin.large`
    width: 40%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  `};
  h1 {
    font-family: 'Audiowide', sans-serif;
    color: ${COLORS.orange};
    font-size: ${SIZES.ltlarge};
    ${mediaMax.medium`
      font-size: ${SIZES.tblarge};
      margin-bottom: 30px;
    `};
    ${mediaMax.small`
      font-size: ${SIZES.mbmedium};
      margin-bottom: 15px;
    `};
  }
  h2 {
    font-weight: 700;
    font-size: ${SIZES.ltxlarge};
    ${mediaMax.medium`
      font-size: ${SIZES.ltxlarge};
      margin-bottom: 30px;
    `};
    ${mediaMax.small`
      font-size: ${SIZES.mbxlarge};
      margin-bottom: 15px;
    `};
  }
  p {
    color: ${COLORS.grey};
    font-weight: 600;
    font-size: ${SIZES.ltmedium};
    margin-bottom: 20px;
    ${mediaMax.medium`
      font-size: ${SIZES.tblarge};
      margin-bottom: 40px;
    `};
    ${mediaMax.small`
      font-size: ${SIZES.mbmedium};
      margin-bottom: 25px;
    `};
  }
`;
const ImageWrap = styled(AnimatedWrap)`
  background-image: url(${chat});
  background-size: cover;
  background-position: center;
  width: 40%;
  height: 60vh;
  ${mediaMax.medium`
    width: 100%;
    height: 60%;
  `};
  ${mediaMax.small`
    height: 50%;
  `};
`;

const ChatWrap = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const isTextInViewport = useIntersectionObserver(textRef);
  const isImageInViewport = useIntersectionObserver(imageRef);

  return (
    <ChatSection>
      <TextWrap ref={textRef} className={isTextInViewport ? 'animation' : ''}>
        <h1>CHAT</h1>
        <h2>
          수리와 함께
          <br />
          이야기해요.
        </h2>
        <p>
          실시간으로 진행되는 채팅을 통해
          <br />
          수리들과 함께 경기를 즐기고 누구보다 열심히 응원해요!
        </p>
        <CustomLink
          to="/chat"
          $border={COLORS.grey}
          $fontColor={COLORS.white}
          $bgColor={COLORS.orange}
          text="GO TO CHAT"
        />
      </TextWrap>
      <ImageWrap
        ref={imageRef}
        className={isImageInViewport ? 'animation' : ''}
      ></ImageWrap>
    </ChatSection>
  );
};

export default ChatWrap;
