import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import CustomBtn from '../../components/common/CustomBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { getPostDetail, increaseHeart } from '../../services/gallery';

const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  text-align: center;
  padding: 50px;
  ${mediaMax.small`
    padding: 30px;
  `};
  h1 {
    font-weight: 700;
    font-size: ${SIZES.ltlarge};
    ${mediaMax.small`
      font-size: ${SIZES.tblarge};
    `};
  }
`;
const MainSection = styled.section`
  margin-top: 50px;
  ${mediaMax.small`
    margin-top: 30px;
  `};
`;
const ImageWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10em;
  ${mediaMax.small`
    gap: 3em;
  `};
  img {
    width: 100%;
  }
`;
const WriterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: ${SIZES.ltsmall};
  margin: 30px 0 50px 0;
  ${mediaMax.small`
    font-size: ${SIZES.tbsmall};
    margin: 30px 0;
  `};
  p {
    color: ${COLORS.grey};
  }
  span {
    color: ${COLORS.orange};
  }
`;
const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 3em;
  ${mediaMax.small`
    gap: 2em;
  `};
`;

const GalleryPostPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);

  useEffect(() => {
    getPostDetail(params.id)
      .then((response) => {
        setContent(response.data);
      })
      .catch((e) => console.log(e));
  }, [params.id]);

  const updateHeart = () => {
    increaseHeart(params.id)
      .then(
        setContent((prevState) => {
          return {
            ...prevState,
            heart: content.heart + 1,
          };
        })
      )
      .catch((e) => console.log(e));
  };

  return (
    <MainWrap>
      {content && (
        <>
          <h1>{content.title}</h1>
          <MainSection>
            <ImageWrap>
              {content.imgUrl &&
                content.imgUrl.map((item, i) => (
                  <img key={i} src={item} alt={`갤러리 이미지 ${i}`} />
                ))}
            </ImageWrap>
            <WriterWrap>
              <p>{content.date}</p>
              <span>{content.nickname}</span>
            </WriterWrap>
            <LinkWrap>
              <CustomBtn
                onClick={updateHeart}
                $border="#F32121"
                $fontColor="#F32121"
                $bgColor="#F32121"
                text={
                  <>
                    <FontAwesomeIcon icon={faHeart} />
                    &nbsp;&nbsp;
                    {` ${content.heart}`}
                  </>
                }
              />
              <CustomBtn
                onClick={() => navigate(-1)}
                $border={COLORS.grey}
                $fontColor={COLORS.white}
                $bgColor={COLORS.orange}
                text="GO TO LIST"
              />
            </LinkWrap>
          </MainSection>
        </>
      )}
    </MainWrap>
  );
};

export default GalleryPostPage;
