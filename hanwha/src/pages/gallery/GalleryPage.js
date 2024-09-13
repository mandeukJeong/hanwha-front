import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import CustomLink from '../../components/common/CustomLink';
import { getGalleryImages } from '../../services/gallery';

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
  height: 45vh;
  object-fit: cover;
  ${mediaMax.medium`
    height: 30vh;
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
  const [imageLists, setImageLists] = useState(null);

  useEffect(() => {
    getGalleryImages(1, 'heart', 4)
      .then((response) => setImageLists(response.data.imageLists))
      .catch((e) => console.log(e));
  }, []);

  return (
    <MainWrap>
      <TitleSection>
        <h1>
          수리들이 좋아하는
          <br />
          추억들을 모아봤어요.
        </h1>
        <CustomLink
          to="/gallery/write"
          $border={COLORS.orange}
          $fontColor={COLORS.orange}
          $bgColor={COLORS.orange}
          text="WRITE"
        />
      </TitleSection>
      <section>
        <ImageWrap>
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
        <NavigateWrap>
          <p>더 많은 추억을 보러가고 싶으신가요?</p>
          <CustomLink
            to="/gallery/list?pages=1"
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
