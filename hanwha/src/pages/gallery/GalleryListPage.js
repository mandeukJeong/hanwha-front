import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import gallery_image1 from '../../assets/common/gallery_4.jpg';
import gallery_image2 from '../../assets/gallery_image2.jpg';
import gallery_image3 from '../../assets/gallery_image3.jpg';
import chevron from '../../assets/chevron.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

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
const ImageWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`;
const ImageFrame = styled.div`
  width: 30%;
  border-radius: 15px 15px 0px 0px;
  background-color: ${COLORS.dark};
  margin-bottom: 100px;
  font-size: 14px;
  font-weight: 400;
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    padding: 0 20px;
  }
  h4 {
    padding: 0 20px;
  }
  p {
    margin: 10px 0 20px 0;
    color: ${COLORS.orange};
    padding: 0 20px;
  }
`;
const GalleryImage = styled.div`
  border-radius: 15px 15px 0px 0px;
  width: 100%;
  height: 350px;
  margin-bottom: 20px;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${COLORS.grey};
  font-size: 20px;

  button {
    background-color: inherit;
    border: none;
    color: ${COLORS.grey};
    font-weight: 700;
    font-size: 16px;
  }
`;
const SelectBox = styled.select`
  width: 115px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(${chevron}) calc(100% - 10px) center no-repeat;
  background-color: ${COLORS.dark};
  background-size: 20px;
  border: none;
  color: ${COLORS.grey};
  padding: 10px 20px;
  font-size: 15px;
  border-radius: 10px;
`;

const GalleryListPage = () => {
  return (
    <GalleryWrap>
      <TitleWrap>
        <h1>GALLERY</h1>
        <SelectBox>
          <option>HOT</option>
          <option>LATEST</option>
          <option>OLDEST</option>
        </SelectBox>
      </TitleWrap>
      <ImageWrap>
        <ImageFrame>
          <GalleryImage $bg={gallery_image1} />
          <h3>2024 스프링 캠프</h3>
          <h4>2024.03.24 16:03:24</h4>
          <p>만득이</p>
        </ImageFrame>
        <ImageFrame>
          <GalleryImage $bg={gallery_image2} />
          <h3>2024 스프링 캠프</h3>
          <h4>2024.03.24 16:03:24</h4>
          <p>만득이</p>
        </ImageFrame>
        <ImageFrame>
          <GalleryImage $bg={gallery_image3} />
          <h3>2024 스프링 캠프</h3>
          <h4>2024.03.24 16:03:24</h4>
          <p>만득이</p>
        </ImageFrame>
        <ImageFrame>
          <GalleryImage $bg={gallery_image1} />
          <h3>2024 스프링 캠프</h3>
          <h4>2024.03.24 16:03:24</h4>
          <p>만득이</p>
        </ImageFrame>
        <ImageFrame>
          <GalleryImage $bg={gallery_image2} />
          <h3>2024 스프링 캠프</h3>
          <h4>2024.03.24 16:03:24</h4>
          <p>만득이</p>
        </ImageFrame>
        <ImageFrame>
          <GalleryImage $bg={gallery_image3} />
          <h3>2024 스프링 캠프</h3>
          <h4>2024.03.24 16:03:24</h4>
          <p>만득이</p>
        </ImageFrame>
      </ImageWrap>
      <PaginationWrap>
        <FontAwesomeIcon icon={faChevronLeft} />
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <FontAwesomeIcon icon={faChevronRight} />
      </PaginationWrap>
    </GalleryWrap>
  );
};

export default GalleryListPage;
