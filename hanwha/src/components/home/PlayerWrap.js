import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax, mediaMin } from '../../utils/media';
import CustomBtn from '../common/CustomBtn';
import player_collection from '../../assets/player_collection.png';
import soori from '../../assets/soori.png';

const CommonSection = styled.section`
  ${mediaMin.large`
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 76px);
  `}
  ${mediaMax.small`
    padding: 30px;
  `}
`;
const ContentWrap = styled.div`
  ${mediaMax.small`
    text-align: center;
  `}
  h1 {
    color: ${COLORS.orange};
    font-family: 'Audiowide', sans-serif;
    font-size: ${SIZES.smlarge};
    margin-bottom: 30px;
    ${mediaMax.small`
      display: none;
    `}
  }
  h2 {
    ${mediaMin.large`
      font-weight: 700;
      font-size: ${SIZES.title};
      letter-spacing: -0.5px;
      margin-bottom: 30px;
    `}
    ${mediaMax.small`
      text-align: start;
      font-size: ${SIZES.xslarge};
      font-weight: 600;
      margin-bottom: 30px;
    `}
  }
  p {
    ${mediaMin.large`
      font-weight: 600;
      letter-spacing: -0.3px;
      color: ${COLORS.grey};
      font-size: ${SIZES.large};
      margin-bottom: 50px;
    `}
    ${mediaMax.small`
      font-size: ${SIZES.small};
      font-weight: 500;
      margin-bottom: 30px;
    `}
  }
  a {
    ${mediaMax.small`
      display: none;
    `}
  }
`;
const SooriImg = styled.img`
  width: 40%;
  margin-bottom: 30px;
  ${mediaMin.large`
    display: none;
  `}
`;
const CommonTint = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: ${(props) => props.$align};
  justify-content: center;
  a {
    margin-bottom: 5em;
  }
  ${mediaMin.large`
    display: none;
  `}
`;
const ImageWrap = styled.div`
  ${mediaMin.large`
    width: 40%;
  `}
  ${mediaMax.small`
    width: 100%;
    margin-bottom: 30px;
    &:first-child {
      display: none;
    }
  `}
`;
const CustomImg = styled.div`
  background-image: url(${(props) => props.$bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  ${mediaMin.large`
    height: 50vh;
  `}
  ${mediaMax.small`
    width: 100%;
    height: 30vh;
    position: relative;
  `}
`;

const PlayerWrap = () => {
  return (
    <CommonSection>
      <ContentWrap>
        <h1>PLAYERS</h1>
        <h2>
          내가 우리 선수들을
          <br />
          소개해줄게!
        </h2>
        <SooriImg src={soori} alt="수리 이미지" />
        <p>
          수리가 우리 선수단의 정보를 수집했어요!
          <br />
          한화 이글스의 투수, 포수, 내야수, 외야수를 만나러 가요.
        </p>
        <CustomBtn
          to="/players"
          $border={COLORS.grey}
          $height="25px"
          $padding="10px 30px"
          $fontSize={SIZES.medium}
          $bgColor={COLORS.orange}
          text="GO TO LIST"
        />
      </ContentWrap>
      <ImageWrap>
        <CustomImg $bg={player_collection}>
          <CommonTint $align="flex-end">
            <CustomBtn
              to="/players"
              $border={COLORS.grey}
              $height="10px"
              $padding="10px 20px"
              $fontSize={SIZES.xsmall}
              $bgColor={COLORS.orange}
              text="GO TO LIST"
            />
          </CommonTint>
        </CustomImg>
      </ImageWrap>
    </CommonSection>
  );
};

export default PlayerWrap;
