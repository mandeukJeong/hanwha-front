import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax, mediaMin } from '../../utils/media';
import CustomBtn from '../../components/common/CustomBtn';
import gallery_1 from '../../assets/common/gallery_1.JPG';
import gallery_2 from '../../assets/common/gallery_2.JPG';
import gallery_3 from '../../assets/common/gallery_3.JPG';
import gallery_4 from '../../assets/common/gallery_4.jpg';

const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  padding: 50px;
  ${mediaMax.small`
    padding: 30px;
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
    font-weight: 600;
    font-size: 30px;
    ${mediaMax.small`
      font-size: 22px;
    `};
  }
`;
const ImageWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ImageCard = styled.div`
  width: 45%;
  ${mediaMax.medium`
    width: 100%;
  `};
`;
const GalleryImg = styled.img`
  width: 100%;
  display: block;
  ${mediaMin.large`
    height: 45vh;
    object-fit: cover;
  `};
`;
const GalleryText = styled.div`
  padding: 20px 0;
  margin-bottom: 50px;
  ${mediaMax.small`
    padding: 15px 0;
    margin-bottom: 30px;
  `};
  h2 {
    font-weight: 600;
    font-size: ${SIZES.ltsmall};
    margin-bottom: 5px;
    ${mediaMax.medium`
      font-size: ${SIZES.ltmedium};
    `};
    ${mediaMax.small`
      font-size: ${SIZES.mblarge};
    `};
  }
  p {
    font-size: ${SIZES.ltxsmall};
    margin-bottom: 5px;
    ${mediaMax.medium`
      font-size: ${SIZES.ltsmall};
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
const NavigateWrap = styled.div`
  text-align: center;
  margin-bottom: 50px;
  ${mediaMax.small`
    margin-bottom: 30px;
  `};
  p {
    font-weight: 600;
    font-size: ${SIZES.ltsmall};
    ${mediaMax.medium`
      font-size: ${SIZES.ltmedium};
    `};
    margin-bottom: 30px;
    ${mediaMax.small`
      margin-bottom: 20px;
    `};
  }
`;

const GalleryPage = () => {
  return (
    <MainWrap>
      <TitleSection>
        <h1>
          수리들이 좋아하는
          <br />
          추억들을 모아봤어요.
        </h1>
        <CustomBtn
          to="/gallery/write"
          $border={COLORS.orange}
          $fontColor={COLORS.orange}
          $bgColor={COLORS.orange}
          text="WRITE"
        />
      </TitleSection>
      <section>
        <ImageWrap>
          <ImageCard>
            <GalleryImg src={gallery_1} alt="대표 이미지1" />
            <GalleryText>
              <h2>한화 vs KIA</h2>
              <p>2024.06.23 18:00:49</p>
              <p>만득이</p>
            </GalleryText>
          </ImageCard>
          <ImageCard>
            <GalleryImg src={gallery_2} alt="대표 이미지2" />
            <GalleryText>
              <h2>한화 vs 두산</h2>
              <p>2024.06.26 16:12:34</p>
              <p>만득이</p>
            </GalleryText>
          </ImageCard>
          <ImageCard>
            <GalleryImg src={gallery_3} alt="대표 이미지3" />
            <GalleryText>
              <h2>한화 vs 두산</h2>
              <p>2024.06.28 14:03:24</p>
              <p>만득이</p>
            </GalleryText>
          </ImageCard>
          <ImageCard>
            <GalleryImg src={gallery_4} alt="대표 이미지3" />
            <GalleryText>
              <h2>2024 스프링 캠프</h2>
              <p>2024.03.24 16:03:24</p>
              <p>만득이</p>
            </GalleryText>
          </ImageCard>
        </ImageWrap>
        <NavigateWrap>
          <p>더 많은 추억을 보러가고 싶으신가요?</p>
          <CustomBtn
            to="/gallery/list"
            $border={COLORS.grey}
            $fontColor={COLORS.white}
            $bgColor={COLORS.orange}
            text="GO TO LIST"
          />
        </NavigateWrap>
      </section>
    </MainWrap>
  );
};

export default GalleryPage;
