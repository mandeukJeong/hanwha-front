import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax, mediaMin } from '../../utils/media';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import CustomLink from '../common/CustomLink';
import { getGalleryImages } from '../../services/gallery';

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
const AnimatedWrap = styled.div`
  opacity: 0;
  transition: opacity 1s ease-out, transform 1s ease-out;
  ${fadeInUp}
  &.animation {
    opacity: 1;
    animation: fadeInUp 1s ease-out forwards;
  }
`;
const GallerySection = styled.section`
  height: calc(100vh - 76px);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  ${mediaMax.medium`
    height: auto;
    padding: 50px 0;
  `};
  ${mediaMax.small`
    gap: 40px;
  `};
`;
const TextWrap = styled(AnimatedWrap)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  ${mediaMax.small`
    gap: 1em;
  `};
  h1 {
    font-family: 'Audiowide', sans-serif;
    color: ${COLORS.orange};
    font-size: ${SIZES.ltlarge};
    ${mediaMax.medium`
      font-size: ${SIZES.tblarge};
    `};
    ${mediaMax.small`
      font-size: ${SIZES.mbmedium};
    `};
  }
  h2 {
    font-weight: 700;
    font-size: ${SIZES.ltxlarge};
    ${mediaMax.medium`
      font-size: ${SIZES.ltxlarge};
    `};
    ${mediaMax.small`
      font-size: ${SIZES.mbxlarge};
    `};
  }
  p {
    color: ${COLORS.grey};
    font-weight: 600;
    font-size: ${SIZES.ltmedium};
    ${mediaMax.medium`
      font-size: ${SIZES.tblarge};
    `};
    ${mediaMax.small`
      font-size: ${SIZES.mbmedium};
    `};
  }
`;
const ImageCard = styled.div`
  background-color: ${COLORS.dark};
  width: 25%;
  border-radius: 12px;
  ${mediaMax.medium`
    width: 80%;
  `};
  ${mediaMin.large`
    transition: all 350ms;
    &:hover {
      transform: scale(1.04);
    }
  `};
`;
const ImageWrap = styled(AnimatedWrap)`
  display: inline-flex;
  justify-content: center;
  gap: 30px;
  ${mediaMin.large`
    &:hover ${ImageCard}:not(:hover) {
    transform: scale(0.9);
    }
    &:hover ${ImageCard}:not(:hover)::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -webkit-backdrop-filter: blur(2px);
      backdrop-filter: blur(2px);
    }
  `};
  ${mediaMax.medium`
    flex-direction: column;
    align-items: center;
  `};
`;
const GalleryImg = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px 12px 0 0;
  ${mediaMax.medium`
    height: 30vh;
    object-fit: cover;
  `};
  ${mediaMax.small`
    height: 25vh;
  `};
`;
const GalleryText = styled.div`
  padding: 20px;
  h2 {
    font-weight: 600;
    font-size: ${SIZES.ltsmall};
    margin-bottom: 5px;
    ${mediaMax.medium`
      font-size: ${SIZES.tbmedium};
      margin-bottom: 10px;
    `};
    ${mediaMax.small`
      font-size: ${SIZES.mbmedium};
    `};
  }
  p {
    font-size: ${SIZES.ltxsmall};
    margin-bottom: 5px;
    ${mediaMax.medium`
      font-size: ${SIZES.tbmedium};
      margin-bottom: 10px;
    `};
    ${mediaMax.small`
      font-size: ${SIZES.mbmedium};
    `};
    &:last-child {
      color: ${COLORS.orange};
      font-weight: 600;
      margin-bottom: 0;
    }
  }
`;

const GalleryWrap = () => {
  const [imageLists, setImageLists] = useState(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const isTextInViewport = useIntersectionObserver(textRef);
  const isImageInViewport = useIntersectionObserver(imageRef);

  useEffect(() => {
    getGalleryImages(1, 'heart', 3)
      .then((response) => setImageLists(response.data.imageLists))
      .catch((e) => console.log(e));
  }, []);

  return (
    <GallerySection>
      <TextWrap ref={textRef} className={isTextInViewport ? 'animation' : ''}>
        <h1>GALLERY</h1>
        <h2>소중한 추억을 공유해주세요.</h2>
        <p>
          수리들의 사진 한 장 한 장이 모여,
          <br />
          나중에 소중한 추억 상자가 될 거예요.
        </p>
        <CustomLink
          to="/gallery"
          $border={COLORS.orange}
          $fontColor={COLORS.orange}
          $bgColor={COLORS.orange}
          text="GO TO LIST"
        />
      </TextWrap>
      <ImageWrap
        ref={imageRef}
        className={isImageInViewport ? 'animation' : ''}
      >
        {imageLists &&
          imageLists.map((item, i) => (
            <ImageCard key={item._id}>
              <GalleryImg src={item.imgUrl[0]} alt={`대표 이미지 ${i + 1}`} />
              <GalleryText>
                <h2>{item.title}</h2>
                <p>{item.date}</p>
                <p>{item.nickname}</p>
              </GalleryText>
            </ImageCard>
          ))}
      </ImageWrap>
    </GallerySection>
  );
};

export default GalleryWrap;
