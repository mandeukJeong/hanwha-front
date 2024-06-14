import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ImageFrame from '../components/common/ImageFrame';
import main_bg from '../assets/main_bg.jpeg';
import player_collection from '../assets/player_collection.png';
import produce_101 from '../assets/produce_101.png';
import gallery_image1 from '../assets/gallery_image1.jpg';
import gallery_image2 from '../assets/gallery_image2.jpg';
import gallery_image3 from '../assets/gallery_image3.jpg';
import gallery_image4 from '../assets/gallery_image4.jpg';
import { COLORS } from '../constants/colors';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const MainWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const IntroduceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${main_bg});
  background-size: cover;
  background-position: center;
`;
const DifferentText = styled.h1`
  color: ${COLORS.white};
  font-size: 120px;
  font-weight: 900;
  letter-spacing: -10px;
  text-shadow: 0 0 6px ${COLORS.white};
  animation: ${fadeIn} 2s ease-in-out forwards;

  &:last-child {
    color: ${COLORS.orange};
    text-shadow: 0 0 6px ${COLORS.orange};
  }
`;
const TitleText = styled.h2`
  font-family: 'Audiowide', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: ${COLORS.orange};
  margin-bottom: 30px;
`;
const SubText = styled.h3`
  color: ${COLORS.white};
  font-weight: 600;
  font-size: 45px;
  margin-bottom: 30px;
  line-height: 1.3;
`;
const ContentText = styled.p`
  color: ${COLORS.grey};
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 50px;
  letter-spacing: -0.5px;
`;
const CommonWrap = styled.div`
  width: 100%;
  height: calc(100vh - 75.05px);
  background-color: ${COLORS.black};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
  gap: 10%;
`;
const PlayerImage = styled.img`
  width: 52%;
`;
const VoteImage = styled.img`
  width: 30%;
  filter: drop-shadow(0 0 4px ${COLORS.orange});
`;
const CommonLink = styled(Link)`
  border: 1px solid ${(props) => props.border};
  border-radius: 5px;
  padding: 16px 40px;
  text-decoration: none;
  color: ${(props) => props.fontcolor};
  font-size: 15px;
  font-weight: 400;
  background: linear-gradient(
    to right,
    ${COLORS.orange} 50%,
    ${(props) => props.bg} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  &:hover {
    border: ${(props) => props.border};
    background-position: left bottom;
    color: ${COLORS.white};
  }
`;
const LinkWrap = styled.div`
  display: flex;
  gap: 50px;
`;
const GalleryWrap = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Home = () => {
  return (
    <>
      <MainWrap>
        <Header />
        <IntroduceWrap>
          <DifferentText>DIFFERENT</DifferentText>
          <DifferentText>US</DifferentText>
        </IntroduceWrap>
        <CommonWrap>
          <div>
            <TitleText>PLAYERS</TitleText>
            <SubText>
              내가 우리 선수들을
              <br />
              소개해줄게!
            </SubText>
            <ContentText>
              수리가 우리 선수단의 정보를 수집했어요!
              <br />
              한화 이글스의 투수, 포수, 내야수, 외야수를 만나러 가요.
            </ContentText>
            <CommonLink
              border={COLORS.grey}
              fontcolor={COLORS.white}
              bg={COLORS.black}
            >
              GO TO LIST
            </CommonLink>
          </div>
          <PlayerImage src={player_collection} alt="선수 이미지" />
        </CommonWrap>
        <CommonWrap>
          <VoteImage src={produce_101} alt="투표 이미지" />
          <div>
            <TitleText>VOTE</TitleText>
            <SubText>
              당신의 선수에게
              <br />
              투표하세요!
            </SubText>
            <ContentText>
              매일, 매순간 행복을 가져다 준<br /> 당신의 선수에게 소중한 한 표를
              전달해주세요!
            </ContentText>
            <LinkWrap>
              <CommonLink
                border={COLORS.grey}
                fontcolor={COLORS.white}
                bg={COLORS.black}
              >
                GO TO VOTE
              </CommonLink>
              <CommonLink
                border={COLORS.orange}
                fontcolor={COLORS.orange}
                bg={COLORS.black}
              >
                GO TO RANK
              </CommonLink>
            </LinkWrap>
          </div>
        </CommonWrap>
        <CommonWrap>
          <div>
            <TitleText>GALLERY</TitleText>
            <SubText>
              소중한 추억을
              <br />
              공유해주세요.
            </SubText>
            <ContentText>
              수리들의 사진 한 장 한 장이 모여,
              <br />
              나중에 소중한 추억 상자가 될 거예요.
            </ContentText>
            <CommonLink
              border={COLORS.orange}
              fontcolor={COLORS.orange}
              bg={COLORS.black}
            >
              GALLERY
            </CommonLink>
          </div>
          <GalleryWrap>
            <ImageFrame
              image={gallery_image1}
              alt="갤러리 이미지1"
              title="2024 스트링 캠프"
              time="2024.03.24 16:03:24"
              writer="만득이"
              wd="45%"
              hg="250px"
            />
            <ImageFrame
              image={gallery_image2}
              alt="갤러리 이미지2"
              title="2024 스트링 캠프"
              time="2024.03.24 16:03:24"
              writer="만득이"
              wd="45%"
              hg="250px"
            />
            <ImageFrame
              image={gallery_image3}
              alt="갤러리 이미지3"
              title="2024 스트링 캠프"
              time="2024.03.24 16:03:24"
              writer="만득이"
              wd="45%"
              hg="250px"
            />
            <ImageFrame
              image={gallery_image4}
              alt="갤러리 이미지4"
              title="2024 스트링 캠프"
              time="2024.03.24 16:03:24"
              writer="만득이"
              wd="45%"
              hg="250px"
            />
          </GalleryWrap>
        </CommonWrap>
        <Footer />
      </MainWrap>
    </>
  );
};

export default Home;
