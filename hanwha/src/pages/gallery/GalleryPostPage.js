import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import gallery_image1 from '../../assets/gallery_image1.jpg';
import gallery_image2 from '../../assets/gallery_image2.jpg';
import gallery_image3 from '../../assets/gallery_image3.jpg';
import gallery_image4 from '../../assets/gallery_image4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const PostWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 125.05px 50px 100px 50px;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  h1 {
    margin: 20px 0;
    font-size: 30px;
    font-weight: 700;
  }
`;
const ImageWrap = styled.div`
  width: 90%;
  margin: 50px 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;
`;
const PostImage = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;
const InfoWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  h4 {
    color: ${COLORS.grey};
  }
  p {
    color: ${COLORS.orange};
    font-weight: 600;
  }
`;
const CommonLink = styled(Link)`
  border: 1px solid ${(props) => props.$border};
  border-radius: 5px;
  padding: 15px 0;
  width: 160px;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.$fontColor};
  font-size: 15px;
  font-weight: 300;
  background: linear-gradient(
    to right,
    ${(props) => props.$gageColor} 50%,
    ${COLORS.black} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  svg {
    margin-right: 10px;
  }

  &:hover {
    border: 1px solid ${(props) => props.$gageColor};
    color: ${COLORS.white};
    background-position: left bottom;
  }
`;
const LinkWrap = styled.div`
  display: flex;
  gap: 100px;
  margin-top: 50px;
`;

const GalleryPostPage = () => {
  return (
    <PostWrap>
      <h1>2024 스트링 캠프</h1>
      <ImageWrap>
        <PostImage src={gallery_image1} alt="갤러리 이미지1" />
        <PostImage src={gallery_image2} alt="갤러리 이미지2" />
        <PostImage src={gallery_image3} alt="갤러리 이미지3" />
        <PostImage src={gallery_image4} alt="갤러리 이미지4" />
      </ImageWrap>
      <InfoWrap>
        <h4>2024.03.24 16:03:24</h4>
        <p>만득이</p>
      </InfoWrap>
      <LinkWrap>
        <CommonLink $border="#F32121" $fontColor="#F32121" $gageColor="#F32121">
          <FontAwesomeIcon icon={faHeart} />
          120
        </CommonLink>
        <CommonLink
          $border={COLORS.grey}
          $fontColor={COLORS.white}
          $gageColor={COLORS.orange}
        >
          GO TO LIST
        </CommonLink>
      </LinkWrap>
    </PostWrap>
  );
};

export default GalleryPostPage;
