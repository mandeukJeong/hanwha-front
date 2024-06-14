import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const ImageWrap = styled.div`
  width: ${(props) => props.wd};
  background-color: ${COLORS.dark};
  color: ${COLORS.white};
  border-radius: 15px 15px 0px 0px;

  div {
    padding: 15px;
  }
  img {
    width: 100%;
    height: ${(props) => props.hg};
    border-radius: 15px 15px 0px 0px;
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

const ImageFrame = ({ image, alt, title, time, writer, wd, hg }) => {
  return (
    <ImageWrap wd={wd} hg={hg}>
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
