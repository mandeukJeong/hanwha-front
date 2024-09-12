import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax, mediaMin } from '../../utils/media';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import CustomLink from '../common/CustomLink';
import produce_101 from '../../assets/common/produce_101.png';
import vote_player from '../../assets/home/vote_player.png';

const blinking = keyframes`
  0% {
    filter: drop-shadow(0 0 10px rgba(243, 115, 33, 0.8)); 
  }
  100% {
    filter: drop-shadow(0 0 10px rgba(243, 115, 33, 0.8));
  }
`;
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
const VoteSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(80vh - 76px);
  gap: 3em;
  ${mediaMax.medium`
    height: calc(85vh - 76px);  
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
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: end;
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
  background-image: url(${vote_player});
  background-size: cover;
  background-position: center;
  width: 40%;
  height: 50vh;
  ${mediaMax.medium`
    width: 100%;
    height: 45%;
  `};
  ${mediaMax.small`
    height: 40%;
  `};
`;
const ImageTint = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 60%;
    animation: ${blinking} 2s alternate infinite;
  }
`;
const LinkWrap = styled.div`
  display: flex;
  gap: 30px;
  ${mediaMax.medium`
    gap: 25px;
  `};
  ${mediaMax.small`
    gap: 20px;
  `};
`;
const VoteWrap = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const isTextInViewport = useIntersectionObserver(textRef);
  const isImageInViewport = useIntersectionObserver(imageRef);

  return (
    <VoteSection>
      <ImageWrap
        ref={imageRef}
        className={isImageInViewport ? 'animation' : ''}
      >
        <ImageTint>
          <img src={produce_101} alt="produce_101" />
        </ImageTint>
      </ImageWrap>
      <TextWrap ref={textRef} className={isTextInViewport ? 'animation' : ''}>
        <h1>VOTE</h1>
        <h2>
          당신의 선수에게
          <br />
          투표하세요!
        </h2>
        <p>
          매일, 매순간 행복을 가져다 준
          <br />
          당신의 선수에게 소중한 한 표를 전달해주세요!
        </p>
        <LinkWrap>
          <CustomLink
            to="/vote"
            $border={COLORS.grey}
            $fontColor={COLORS.white}
            $bgColor={COLORS.orange}
            text="GO TO VOTE"
          />
          <CustomLink
            to="/vote/result"
            $border={COLORS.orange}
            $fontColor={COLORS.orange}
            $bgColor={COLORS.orange}
            text="GO TO RANK"
          />
        </LinkWrap>
      </TextWrap>
    </VoteSection>
  );
};

export default VoteWrap;
