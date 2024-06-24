import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const WriteWrap = styled.div`
  width: 100%;
  height: calc(100vh - 75.05px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 125.05px 50px 100px 50px;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  h1 {
    margin: 20px 0;
    font-size: 30px;
    font-weight: 700;
  }
`;
const FormWrap = styled.form`
  width: 45%;
  max-width: 600px;
  margin-top: 50px;
  div {
    margin: 50px 0;
    display: flex;
    justify-content: center;
  }
`;
const WriteInput = styled.input`
  width: 100%;
  font-size: 16px;
  background-color: ${COLORS.dark};
  color: ${COLORS.white};
  border: none;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  &::placeholder,
  &[type='file'] {
    color: ${COLORS.grey};
    font-weight: 700;
    margin-bottom: 30px;
  }
  &::file-selector-button {
    display: none;
  }
`;
const AlertText = styled.p`
  color: ${COLORS.grey};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.3;
  margin-bottom: 20px;
`;
const CommonLink = styled(Link)`
  border: 1px solid ${COLORS.grey};
  border-radius: 5px;
  padding: ${(props) => props.$pd};
  text-decoration: none;
  color: ${COLORS.white};
  font-size: 13px;
  font-weight: ${(props) => props.$fontWeight};
  background: linear-gradient(
    to right,
    ${COLORS.orange} 50%,
    rgba(0, 0, 0, 0) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  &:hover {
    border: 1px solid ${COLORS.orange};
    color: ${COLORS.white};
    background-position: left bottom;
  }
`;

const GalleryWritePage = () => {
  return (
    <WriteWrap>
      <h1>수리가 만든 추억을 공유해주세요!</h1>
      <FormWrap>
        <WriteInput type="text" placeholder="제목" />
        <WriteInput type="file" placeholder="첨부파일" />
        <AlertText>
          * 음란, 폭력, 정치적인 내용의 이미지가 포함되었을 경우,
          <br />
          관리자에 의해 해당 게시글이 비공개 처리될 수 있습니다.
        </AlertText>
        <AlertText>* JPG, PNG만 등록 가능합니다.</AlertText>
        <div>
          <CommonLink type="submit" $pd="15px 60px" $fontWeight="500">
            파일등록
          </CommonLink>
        </div>
      </FormWrap>
      <CommonLink $pd="15px 30px" $fontWeight="400">
        GO TO LIST
      </CommonLink>
    </WriteWrap>
  );
};

export default GalleryWritePage;
