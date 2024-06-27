import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax, mediaMin } from '../../utils/media';
import CustomBtn from '../common/CustomBtn';
import player_bg from '../../assets/home/player_bg.JPG';

const PlayerSection = styled.section`
  height: calc(80vh - 76px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;
`;
const TextWrap = styled.div`
  width: 40%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  h1 {
    font-family: 'Audiowide', sans-serif;
    color: ${COLORS.orange};
    font-size: ${SIZES.ltlarge};
  }
  h2 {
    font-weight: 700;
    font-size: ${SIZES.ltxlarge};
  }
  p {
    color: ${COLORS.grey};
    font-size: ${SIZES.ltmedium};
    font-weight: 600;
    margin-bottom: 20px;
  }
`;
const ImageWrap = styled.div`
  background-image: url(${player_bg});
  background-size: cover;
  background-position: center;
  width: 40%;
  height: 50vh;
`;

const PlayerWrap = () => {
  return (
    <PlayerSection>
      <TextWrap>
        <h1>PLAYERS</h1>
        <h2>
          내가 우리 선수들을
          <br /> 소개해줄게!
        </h2>
        <p>
          수리가 우리 선수단의 정보를 수집했어요!
          <br />
          한화 이글스의 투수, 포수, 내야수, 외야수를 만나러 가요.
        </p>
        <CustomBtn
          to="/players"
          $border={COLORS.grey}
          $fontSize={SIZES.ltsmall}
          $fontColor={COLORS.white}
          $bgColor={COLORS.orange}
          text="GO TO LIST"
        />
      </TextWrap>
      <ImageWrap></ImageWrap>
    </PlayerSection>
  );
};

export default PlayerWrap;
