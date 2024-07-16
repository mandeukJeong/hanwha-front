import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax, mediaMin } from '../../utils/media';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import CustomBtn from '../../components/common/CustomBtn';
import { getPlayerProfile } from '../../services/players';

const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
`;
const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15em;
  padding-top: 50px;
  ${mediaMax.medium`
    padding-top: 20px;
    flex-direction: column;
    gap: 2em;
  `};
  ${mediaMax.small`
    padding-top: 10px;
    gap: 1.5em;
  `};
`;
const ProfileImg = styled.img`
  ${mediaMin.large`
    align-self: flex-start;
    width: 30%;
  `};
  ${mediaMax.medium`
    width: 50%;
  `};
  ${mediaMax.small`
    width: 70%;
  `};
`;
const ProfileWrap = styled.div`
  width: 30%;
  ${mediaMax.medium`
    width: 50%;
  `};
  ${mediaMax.small`
    width: 70%;
  `};
`;
const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 1em;
  ${mediaMax.medium`
    justify-content: center;
    margin-bottom: 2em;
  `};
  ${mediaMax.small`
    gap: 15px;
    margin-bottom: 1.5em;
  `};
  h2 {
    color: ${COLORS.grey};
    font-weight: 700;
    vertical-align: center;
    font-size: 75px;
    height: 75px;
    line-height: 75px;
    margin-bottom: 20px;
    ${mediaMax.small`
      font-size: 50px;
      height: 50px;
      line-height: 50px;
      margin-bottom: 6px;
    `};
  }
`;
const NameWrap = styled.div`
  height: 75px;
  ${mediaMax.small`
    height: 50px;
  `};
  h3 {
    font-weight: 400;
    font-size: ${SIZES.ltlarge};
    ${mediaMax.small`
      font-size: ${SIZES.tblarge};
    `};
  }
  p {
    color: ${COLORS.grey};
    font-weight: 500;
    font-size: ${SIZES.ltmedium};
    ${mediaMax.small`
      font-size: ${SIZES.tbmedium};
    `};
  }
`;
const PositionWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 2em;
  ${mediaMax.medium`
    margin-bottom: 3em;
  `};
  ${mediaMax.small`
    gap: 15px;
    margin-bottom: 2em;
  `};
`;
const PositionImg = styled.div`
  background-color: ${COLORS.dark};
  border-radius: 10px;
  width: 80px;
  height: 80px;
  ${mediaMax.small`
    width: 70px;
    height: 70px;
  `};
`;
const PositionText = styled.div`
  h3 {
    font-weight: 600;
    font-size: ${SIZES.ltmedium};
    margin-bottom: 3px;
    ${mediaMax.small`
      font-size: ${SIZES.tbmedium};
      margin-bottom: 5px;
    `};
  }
  p {
    font-size: ${SIZES.ltsmall};
    ${mediaMax.small`
      font-size: ${SIZES.tbsmall};
    `};
  }
`;
const PersonalDetail = styled.div`
  display: flex;
  margin-bottom: 1.5em;
  h3 {
    color: ${COLORS.grey};
    font-weight: 600;
    font-size: ${SIZES.ltsmall};
    width: 70px;
    ${mediaMax.small`
      font-size: ${SIZES.tbsmall};
      width: 65px;
    `};
  }
  p {
    width: 300px;
    font-size: ${SIZES.ltsmall};
    ${mediaMax.small`
      width: 250px;
      font-size: ${SIZES.tbsmall};
    `};
  }
`;
const SeasonSection = styled.section`
  text-align: center;
  padding: 100px 0;
  ${mediaMax.medium`
    padding: 80px 0;
  `};
  ${mediaMax.small`
    padding: 50px 0;
  `};
  h1 {
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 60px;
    ${mediaMax.medium`
      margin-bottom: 50px;
    `};
    ${mediaMax.small`
      font-size: 25px;
      margin-bottom: 30px;
    `};
  }
`;
const AnimatedWrap = styled.div`
  opacity: 0;
  transition: opacity 1s ease-out, transform 1s ease-out;
  ${fadeInUp}
  &.animation {
    opacity: 1;
    animation: fadeInUp 1s ease-out forwards;
  }
`;
const SeasonWrap = styled(AnimatedWrap)`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  ${mediaMin.large`
    gap: 5em;
  `};
  ${mediaMax.medium`
    margin-bottom: 50px;
  `};
  ${mediaMax.small`
    margin-bottom: 30px;
  `};
`;
const ScoreImg = styled.div`
  background-color: ${COLORS.dark};
  border-radius: 20px;
  width: 30%;
  height: 350px;
  ${mediaMax.medium`
    display: none;
  `};
`;
const ScoreWrap = styled.div`
  background-color: ${COLORS.dark};
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 350px;
  gap: 0.5em;
  ${mediaMax.medium`
    width: 70%;
    height: 300px;
  `};
  ${mediaMax.small`
    width: 80%;
    height: 250px;
    gap: 0.3em;
  `};
`;
const ScoreDetail = styled.div`
  width: 30%;
  h3 {
    color: ${COLORS.orange};
    font-weight: 700;
    margin-bottom: 0.1em;
    font-size: ${SIZES.ltxlarge};
    ${mediaMax.small`
      font-size: ${SIZES.tbxlarge};
    `};
  }
  p {
    color: ${COLORS.grey};
    font-weight: 600;
    font-size: ${SIZES.ltsmall};
    ${mediaMax.small`
      font-size: ${SIZES.tbsmall};
    `};
  }
`;

const PlayerDetail = () => {
  const params = useParams();
  const [playerProfile, setPlayerProfile] = useState(null);
  const seasonRef = useRef(null);
  const isSeasonInViewport = useIntersectionObserver(seasonRef);

  useEffect(() => {
    getPlayerProfile(params.pCd)
      .then((response) => setPlayerProfile(response.data))
      .catch((e) => console.log(e));
  }, [params]);

  return (
    <MainWrap>
      {playerProfile && (
        <ProfileSection>
          <ProfileImg src={playerProfile.img} alt={playerProfile.pNm} />
          <ProfileWrap>
            <InfoWrap>
              <h2>{playerProfile.backNo}</h2>
              <NameWrap>
                <h3>{playerProfile.pNm}</h3>
                <p>{playerProfile.pEn}</p>
              </NameWrap>
            </InfoWrap>
            <PositionWrap>
              <PositionImg></PositionImg>
              <PositionText>
                <h3>{playerProfile.posNm}</h3>
                <p>{playerProfile.posDetail}</p>
              </PositionText>
            </PositionWrap>
            <div>
              <PersonalDetail>
                <h3>생년월일</h3>
                <p>{playerProfile.birth}</p>
              </PersonalDetail>
              <PersonalDetail>
                <h3>체격</h3>
                <p>
                  {playerProfile.height}cm, {playerProfile.weight}kg
                </p>
              </PersonalDetail>
              <PersonalDetail>
                <h3>출신학교</h3>
                <p>{playerProfile.school}</p>
              </PersonalDetail>
              <PersonalDetail>
                <h3>경력</h3>
                <p>
                  {playerProfile.career.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </PersonalDetail>
            </div>
          </ProfileWrap>
        </ProfileSection>
      )}

      <SeasonSection>
        <h1>2024 SEASON</h1>
        <SeasonWrap
          ref={seasonRef}
          className={isSeasonInViewport ? 'animation' : ''}
        >
          <ScoreImg></ScoreImg>
          <ScoreWrap>
            <ScoreDetail>
              <h3>5.91</h3>
              <p>평균자책점</p>
            </ScoreDetail>
            <ScoreDetail>
              <h3>1</h3>
              <p>승</p>
            </ScoreDetail>
            <ScoreDetail>
              <h3>3</h3>
              <p>패</p>
            </ScoreDetail>
            <ScoreDetail>
              <h3>31</h3>
              <p>탈삼진</p>
            </ScoreDetail>
            <ScoreDetail>
              <h3>32</h3>
              <p>이닝</p>
            </ScoreDetail>
            <ScoreDetail>
              <h3>0</h3>
              <p>세이브</p>
            </ScoreDetail>
          </ScoreWrap>
        </SeasonWrap>
        <CustomBtn
          to="/players/pitcher"
          $border={COLORS.grey}
          $fontColor={COLORS.white}
          $bgColor={COLORS.orange}
          text="GO TO LIST"
        />
      </SeasonSection>
    </MainWrap>
  );
};

export default PlayerDetail;
