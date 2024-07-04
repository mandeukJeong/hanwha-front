import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import chevron from '../../assets/gallery/chevron.png';
import gallery_1 from '../../assets/common/gallery_1.JPG';
import gallery_2 from '../../assets/common/gallery_2.JPG';
import gallery_3 from '../../assets/common/gallery_3.JPG';

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
const SortSelect = styled.select`
  border: none;
  color: ${COLORS.grey};
  border-radius: 10px;
  background: url(${chevron}) calc(100% - 10px) center no-repeat;
  background-color: ${COLORS.dark};
  background-size: ${SIZES.ltmedium};
  padding: 12px 24px;
  font-size: ${SIZES.ltxsmall};
  width: 115px;
  ${mediaMax.small`
    background-size: ${SIZES.tblarge};
    padding: 10px 20px;
    font-size: ${SIZES.tbsmall};
    width: 100px;
  `};
`;
const GalleryWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5em;
  margin-bottom: 50px;
  ${mediaMax.medium`
    gap: 1em;
    justify-content: space-between;
  `};
  ${mediaMax.small`
    margin-bottom: 30px;
  `};
`;
const ImageCard = styled.div`
  background-color: ${COLORS.dark};
  border-radius: 12px;
  width: calc(100% / 3 - 10em / 3);
  margin-bottom: 30px;
  ${mediaMax.medium`
    width: 45%;
  `};
`;
const GalleryImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px 12px 0 0;
`;
const GalleryText = styled.div`
  padding: 20px;
  ${mediaMax.medium`
    padding: 15px;
  `};
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
const PageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  margin-bottom: 50px;
  ${mediaMax.small`
    margin-bottom: 30px;
  `};
  svg {
    color: ${COLORS.grey};
    vertical-align: center;
    height: 20px;
    line-height: 20px;
    ${mediaMax.small`
      height: 15px;
      line-height: 15px;
    `};
  }
`;
const PageBtn = styled.button`
  padding: 0;
  border: none;
  background-color: inherit;
  color: ${COLORS.grey};
  vertical-align: center;
  font-weight: 700;
  height: 20px;
  line-height: 20px;
  margin-top: 1.5px;
  font-size: 18px;
  ${mediaMax.small`
    height: 15px;
    line-height: 15px;
    margin-top: 1.5px;
    font-size: 15px;
  `};
`;

const GalleryListPage = () => {
  return (
    <MainWrap>
      <TitleSection>
        <h1>GALLERY</h1>
        <SortSelect>
          <option>HOT</option>
          <option>LATEST</option>
          <option>OLDEST</option>
        </SortSelect>
      </TitleSection>
      <section>
        <GalleryWrap>
          <ImageCard>
            <GalleryImage src={gallery_1} alt="갤러리 이미지" />
            <GalleryText>
              <h2>한화 vs KIA</h2>
              <p>2024.06.23 18:00:49</p>
              <p>만득이</p>
            </GalleryText>
          </ImageCard>
          <ImageCard>
            <GalleryImage src={gallery_2} alt="갤러리 이미지" />
            <GalleryText>
              <h2>한화 vs 두산</h2>
              <p>2024.06.26 16:12:34</p>
              <p>만득이</p>
            </GalleryText>
          </ImageCard>
          <ImageCard>
            <GalleryImage src={gallery_3} alt="갤러리 이미지" />
            <GalleryText>
              <h2>한화 vs 두산</h2>
              <p>2024.06.28 14:03:24</p>
              <p>만득이</p>
            </GalleryText>
          </ImageCard>
          <ImageCard>
            <GalleryImage src={gallery_1} alt="갤러리 이미지" />
            <GalleryText>
              <h2>한화 vs KIA</h2>
              <p>2024.06.23 18:00:49</p>
              <p>만득이</p>
            </GalleryText>
          </ImageCard>
          <ImageCard>
            <GalleryImage src={gallery_2} alt="갤러리 이미지" />
            <GalleryText>
              <h2>한화 vs 두산</h2>
              <p>2024.06.26 16:12:34</p>
              <p>만득이</p>
            </GalleryText>
          </ImageCard>
          <ImageCard>
            <GalleryImage src={gallery_3} alt="갤러리 이미지" />
            <GalleryText>
              <h2>한화 vs 두산</h2>
              <p>2024.06.28 14:03:24</p>
              <p>만득이</p>
            </GalleryText>
          </ImageCard>
          <ImageCard>
            <GalleryImage src={gallery_1} alt="갤러리 이미지" />
            <GalleryText>
              <h2>한화 vs KIA</h2>
              <p>2024.06.23 18:00:49</p>
              <p>만득이</p>
            </GalleryText>
          </ImageCard>
          <ImageCard>
            <GalleryImage src={gallery_2} alt="갤러리 이미지" />
            <GalleryText>
              <h2>한화 vs 두산</h2>
              <p>2024.06.26 16:12:34</p>
              <p>만득이</p>
            </GalleryText>
          </ImageCard>
          <ImageCard>
            <GalleryImage src={gallery_3} alt="갤러리 이미지" />
            <GalleryText>
              <h2>한화 vs 두산</h2>
              <p>2024.06.28 14:03:24</p>
              <p>만득이</p>
            </GalleryText>
          </ImageCard>
        </GalleryWrap>
        <PageWrap>
          <FontAwesomeIcon icon={faChevronLeft} />
          <PageBtn>1</PageBtn>
          <PageBtn>2</PageBtn>
          <PageBtn>3</PageBtn>
          <PageBtn>4</PageBtn>
          <PageBtn>5</PageBtn>
          <FontAwesomeIcon icon={faChevronRight} />
        </PageWrap>
      </section>
    </MainWrap>
  );
};

export default GalleryListPage;
