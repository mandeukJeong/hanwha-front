import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const ImageWrap = styled.div`
  width: 300px;
  height: 280px;
  background-color: ${COLORS.dark};
  color: ${COLORS.white};
  border-radius: 15px 15px 0px 0px;

  div {
    padding: 15px;
  }
  img {
    width: 100%;
    height: 180px;
    border-radius: 15px 15px 0px 0px;
    object-fit: cover;
  }
  h3 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  p {
    margin-bottom: 10px;
    font-size: 12px;

    &:last-child {
      color: ${COLORS.orange};
      margin-bottom: 0;
    }
  }
`;

const ImageFrame = ({ image, alt, title, time, writer }) => {
  return (
    <ImageWrap>
      <img src={image} alt={alt} />
      <div>
        <h3>{title}</h3>
        <p>{time}</p>
        <p>{writer}</p>
      </div>
    </ImageWrap>
  );
};

export default ImageFrame;
