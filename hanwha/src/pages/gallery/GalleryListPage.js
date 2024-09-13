import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { getGalleryImages } from '../../services/gallery';
import chevron from '../../assets/gallery/chevron.png';

const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  padding: 50px;
  ${mediaMax.small`
    padding: 30px;
  `};
`;
const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  ${mediaMax.small`
    margin-bottom: 30px;
  `};
  h1 {
    font-weight: 600;
    font-size: 30px;
    ${mediaMax.small`
      font-size: 22px;
    `};
  }
`;
const SortSelect = styled.select`
  border: none;
  color: ${COLORS.grey};
  border-radius: 10px;
  background: url(${chevron}) calc(100% - 10px) center no-repeat;
  background-color: ${COLORS.dark};
  background-size: ${SIZES.ltmedium};
  padding: 12px 24px;
  font-size: ${SIZES.ltxsmall};
  width: 115px;
  ${mediaMax.small`
    background-size: ${SIZES.tblarge};
    padding: 10px 20px;
    font-size: ${SIZES.tbsmall};
    width: 100px;
  `};
`;
const GalleryWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5em;
  margin-bottom: 50px;
  ${mediaMax.medium`
    gap: 1em;
    justify-content: space-between;
  `};
  ${mediaMax.small`
    margin-bottom: 30px;
  `};
`;
const ImageCard = styled.div`
  background-color: ${COLORS.dark};
  border-radius: 12px;
  width: calc(100% / 3 - 10em / 3);
  margin-bottom: 30px;
  ${mediaMax.medium`
    width: 45%;
  `};
`;
const GalleryImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px 12px 0 0;
  object-fit: cover;
  height: 35vh;
  ${mediaMax.medium`
    height: 15vh;
  `};
`;
const GalleryText = styled.div`
  padding: 20px;
  ${mediaMax.medium`
    padding: 15px;
  `};
  h2 {
    font-weight: 600;
    font-size: ${SIZES.ltsmall};
    margin-bottom: 5px;
    ${mediaMax.medium`
      font-size: ${SIZES.tbmedium};
      margin-bottom: 10px;
    `};
    ${mediaMax.small`
      font-size: ${SIZES.mbmedium};
    `};
  }
  p {
    font-size: ${SIZES.ltxsmall};
    margin-bottom: 5px;
    ${mediaMax.medium`
      font-size: ${SIZES.tbmedium};
      margin-bottom: 10px;
    `};
    ${mediaMax.small`
      font-size: ${SIZES.mbmedium};
    `};
    &:last-child {
      color: ${COLORS.orange};
      font-weight: 600;
      margin-bottom: 0;
    }
  }
`;
const PageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  margin-bottom: 50px;
  ${mediaMax.small`
    margin-bottom: 30px;
  `};
  svg {
    color: ${COLORS.grey};
    vertical-align: center;
    height: 20px;
    line-height: 20px;
    ${mediaMax.small`
      height: 15px;
      line-height: 15px;
    `};
  }
`;
const PageBtn = styled.button`
  padding: 0;
  border: none;
  background-color: inherit;
  color: ${(props) => (props.$current ? COLORS.white : COLORS.grey)};
  vertical-align: center;
  font-weight: 700;
  height: 20px;
  line-height: 20px;
  margin-top: 1.5px;
  font-size: 18px;
  ${mediaMax.small`
    height: 15px;
    line-height: 15px;
    margin-top: 1.5px;
    font-size: 15px;
  `};
`;

const GalleryListPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [imageLists, setImageLists] = useState(null);
  const [totalPages, setTotalpages] = useState(0);
  const [order, setOrder] = useState('heart');

  const startPage = Math.floor((searchParams.get('pages') - 1) / 5) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);

  useEffect(() => {
    getGalleryImages(searchParams.get('pages'), order, 9)
      .then((response) => {
        setImageLists(response.data.imageLists);
        setTotalpages(response.data.totalPages);
      })
      .catch((e) => console.log(e));
  }, [order, searchParams]);

  const onChange = (e) => {
    setOrder(e.target.value);
  };

  const onChangeCurrentPage = (currentPage) => {
    setSearchParams({
      pages:
        currentPage < 1
          ? 1
          : currentPage > totalPages
          ? totalPages
          : currentPage,
    });
  };

  const onClickNavigate = (id) => {
    navigate(`/gallery/post/${id}`);
  };

  return (
    <MainWrap>
      <TitleSection>
        <h1>GALLERY</h1>
        <SortSelect onChange={onChange}>
          <option value="heart">HOT</option>
          <option value="latest">LATEST</option>
          <option value="oldest">OLDEST</option>
        </SortSelect>
      </TitleSection>
      <section>
        <GalleryWrap>
          {imageLists &&
            imageLists.map((item) => (
              <ImageCard
                key={item._id}
                onClick={() => onClickNavigate(item._id)}
              >
                <GalleryImage
                  src={item.imgUrl[0]}
                  alt={`${item.title} 이미지`}
                />
                <GalleryText>
                  <h2>{item.title}</h2>
                  <p>{item.date}</p>
                  <p>{item.nickname}</p>
                </GalleryText>
              </ImageCard>
            ))}
        </GalleryWrap>
        <PageWrap>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => onChangeCurrentPage(searchParams.get('pages') - 1)}
          />
          {endPage - startPage + 1 > 0 &&
            [...Array(endPage - startPage + 1)].map((_, index) => (
              <PageBtn
                key={startPage + index}
                onClick={() => onChangeCurrentPage(startPage + index)}
                $current={
                  Number(startPage + index) ===
                  Number(searchParams.get('pages'))
                    ? true
                    : false
                }
              >
                {startPage + index}
              </PageBtn>
            ))}
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => onChangeCurrentPage(searchParams.get('pages') + 1)}
          />
        </PageWrap>
      </section>
    </MainWrap>
  );
};

export default GalleryListPage;
