import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import gallery_image1 from '../../assets/gallery_image1.jpg';
import gallery_image2 from '../../assets/gallery_image2.jpg';
import gallery_image3 from '../../assets/gallery_image3.jpg';
import gallery_image4 from '../../assets/gallery_image4.jpg';

const GalleryWrap = styled.div`
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  padding: 125.05px 50px 100px 50px;
  width: 100%;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    line-height: 1.3;
  }
`;
const CommonLink = styled(Link)`
  border: 1px solid ${(props) => props.$border};
  border-radius: 5px;
  padding: 15px 50px;
  text-decoration: none;
  color: ${(props) => props.$fontColor};
  font-size: 15px;
  font-weight: 300;
  background: linear-gradient(
    to right,
    ${COLORS.orange} 50%,
    rgba(0, 0, 0, 0) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  &:hover {
    border: 1px solid ${COLORS.orange};
    color: ${COLORS.white};
    background-position: left bottom;
  }
`;
const ImageWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const PostWrap = styled.div`
  width: 45vw;
  margin-bottom: 100px;
  font-size: 14px;
  font-weight: 400;
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    margin-top: 10px;
    color: ${COLORS.orange};
    font-size: 14px;
  }
`;
const GalleryImage = styled.div`
  width: 90%;
  height: 350px;
  margin-bottom: 20px;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const MoveWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

const GalleryPage = () => {
  return (
    <GalleryWrap>
      <TitleWrap>
        <h1>
          수리들이 좋아하는
          <br />
          추억들을 모아봤어요.
        </h1>
        <CommonLink $border={COLORS.orange} $fontColor={COLORS.orange}>
          WRITE
        </CommonLink>
      </TitleWrap>
      <ImageWrap>
        <PostWrap>
          <GalleryImage $bg={gallery_image1} />
          <h3>2024 스프링 캠프</h3>
          <h4>2024.03.24 16:03:24</h4>
          <p>만득이</p>
        </PostWrap>
        <PostWrap>
          <GalleryImage $bg={gallery_image2} />
          <h3>2024 스프링 캠프</h3>
          <h4>2024.03.24 16:03:24</h4>
          <p>만득이</p>
        </PostWrap>
        <PostWrap>
          <GalleryImage $bg={gallery_image3} />
          <h3>2024 스프링 캠프</h3>
          <h4>2024.03.24 16:03:24</h4>
          <p>만득이</p>
        </PostWrap>
        <PostWrap>
          <GalleryImage $bg={gallery_image4} />
          <h3>2024 스프링 캠프</h3>
          <h4>2024.03.24 16:03:24</h4>
          <p>만득이</p>
        </PostWrap>
      </ImageWrap>
      <MoveWrap>
        <p>더 많은 추억을 보러가고 싶으신가요?</p>
        <CommonLink
          to="/gallery/list"
          $border={COLORS.grey}
          $fontColor={COLORS.white}
        >
          GO TO LIST
        </CommonLink>
      </MoveWrap>
    </GalleryWrap>
  );
};

export default GalleryPage;
