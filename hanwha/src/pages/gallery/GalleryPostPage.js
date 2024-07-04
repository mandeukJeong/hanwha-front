import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import CustomBtn from '../../components/common/CustomBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import gallery_1 from '../../assets/common/gallery_1.JPG';
import gallery_2 from '../../assets/common/gallery_2.JPG';
import gallery_3 from '../../assets/common/gallery_3.JPG';

const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  text-align: center;
  padding: 50px;
  ${mediaMax.small`
    padding: 30px;
  `};
  h1 {
    font-weight: 700;
    font-size: ${SIZES.ltlarge};
    ${mediaMax.small`
      font-size: ${SIZES.tblarge};
    `};
  }
`;
const MainSection = styled.section`
  margin-top: 50px;
  ${mediaMax.small`
    margin-top: 30px;
  `};
`;
const ImageWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10em;
  ${mediaMax.small`
    gap: 3em;
  `};
  img {
    width: 100%;
  }
`;
const WriterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: ${SIZES.ltsmall};
  margin: 30px 0 50px 0;
  ${mediaMax.small`
    font-size: ${SIZES.tbsmall};
    margin: 30px 0;
  `};
  p {
    color: ${COLORS.grey};
  }
  span {
    color: ${COLORS.orange};
  }
`;
const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 3em;
  ${mediaMax.small`
    gap: 2em;
  `};
`;

const GalleryPostPage = () => {
  return (
    <MainWrap>
      <h1>2024 스트링 캠프</h1>
      <MainSection>
        <ImageWrap>
          <img src={gallery_1} alt="갤러리 이미지" />
          <img src={gallery_2} alt="갤러리 이미지" />
          <img src={gallery_3} alt="갤러리 이미지" />
        </ImageWrap>
        <WriterWrap>
          <p>2024.03.24 16:03:24</p>
          <span>만득이</span>
        </WriterWrap>
        <LinkWrap>
          <CustomBtn
            to="/"
            $border="#F32121"
            $fontColor="#F32121"
            $bgColor="#F32121"
            text={
              <>
                <FontAwesomeIcon icon={faHeart} />
                &nbsp;&nbsp;
                {' 120'}
              </>
            }
          />
          <CustomBtn
            to="/gallery/list"
            $border={COLORS.grey}
            $fontColor={COLORS.white}
            $bgColor={COLORS.orange}
            text="GO TO LIST"
          />
        </LinkWrap>
      </MainSection>
    </MainWrap>
  );
};

export default GalleryPostPage;
