import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { changeModalInfo } from '../../store/modal';
import { postGalleryImages } from '../../services/gallery';
import Alert from '../../components/common/Alert';
import CustomBtn from '../../components/common/CustomBtn';
import CustomLink from '../../components/common/CustomLink';

const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  min-height: calc(100vh - 176px);
  ${mediaMax.medium`
    min-height: calc(100vh - 345px);
  `};
  ${mediaMax.small`
    padding: 30px;
    min-height: calc(100vh - 136px);
  `};
  h1 {
    font-weight: 700;
    font-size: 30px;
    ${mediaMax.small`
      font-size: ${SIZES.tblarge};
    `};
  }
`;
const FormWrap = styled.form`
  text-align: center;
  padding: 50px 0;
  width: 40%;
  ${mediaMax.medium`
    width: 70%;
  `};
  ${mediaMax.small`
    padding: 30px 0;
    width: 90%;
  `};
`;
const FormInput = styled.input`
  width: 100%;
  border: none;
  background-color: ${COLORS.dark};
  color: ${COLORS.white};
  border-radius: 10px;
  font-size: ${SIZES.ltsmall};
  padding: 20px;
  margin-bottom: 30px;
  ${mediaMax.small`
    font-size: ${SIZES.mbmedium};
    padding: 18px;
    margin-bottom: 20px;
  `};
  &::placeholder {
    color: ${COLORS.grey};
    font-weight: 700;
  }
`;
const FormLabel = styled.label`
  display: flex;
  align-items: center;
  text-align: start;
  border: none;
  background-color: ${COLORS.dark};
  font-weight: 700;
  color: ${COLORS.grey};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  ${mediaMax.small`
    padding: 18px;
    margin-bottom: 20px;
  `};
  span {
    font-size: ${SIZES.ltsmall};
    ${mediaMax.small`
      font-size: ${SIZES.mbmedium};
    `};
  }
  input {
    display: none;
  }
`;
const FileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const FileTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${COLORS.white};
  font-size: ${SIZES.ltsmall};
  margin-bottom: 5px;
  ${mediaMax.small`
    font-size: ${SIZES.mbmedium};
  `};
  &:last-child {
    margin-bottom: 30px;
    ${mediaMax.small`
      margin-bottom: 20px;
    `};
  }
`;
const AlertWrap = styled.div`
  text-align: start;
  color: ${COLORS.grey};
  font-weight: 600;
  font-size: ${SIZES.ltsmall};
  margin-bottom: 50px;
  ${mediaMax.small`
    font-size: ${SIZES.mbmedium};
    margin-bottom: 30px;
  `};
  p {
    &:first-child {
      margin-bottom: 20px;
      ${mediaMax.small`
        margin-bottom: 15px;
      `};
    }
  }
`;

const GalleryWritePage = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState([]);
  const [title, setTitle] = useState('');

  const handleAddImages = (e) => {
    const imageLists = e.target.files;
    let imageFileLists = [...imageFile];

    for (let i = 0; i < imageLists.length; i++) {
      imageFileLists.push(imageLists[i]);
    }

    setImageFile(imageFileLists);
  };

  const handleDeleteImages = (id) => {
    setImageFile(imageFile.filter((_, index) => index !== id));
  };

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === '') {
      dispatch(
        changeModalInfo({
          isOpen: true,
          modalText: '제목을 입력해주세요.',
          modalBtnText: '확인',
        })
      );

      return;
    }

    if (imageFile.length === 0) {
      dispatch(
        changeModalInfo({
          isOpen: true,
          modalText: '파일을 등록해주세요.',
          modalBtnText: '확인',
        })
      );

      return;
    }

    const formData = new FormData();

    for (let i = 0; i < imageFile.length; i++) {
      formData.append('files', imageFile[i]);
    }

    formData.append('title', title);

    const date = new Date();

    const formattedDate = date
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\./g, '.')
      .trim();

    const formattedTime = date
      .toLocaleTimeString('ko-KR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      .split(':')
      .map((unit) => unit.padStart(2, '0'))
      .join(':');

    formData.append('date', `${formattedDate} ${formattedTime}`);

    postGalleryImages(formData)
      .then((response) => {
        if (response.status === 200) {
          dispatch(
            changeModalInfo({
              isOpen: true,
              modalText: '업로드가 완료되었습니다.',
              modalBtnText: '확인',
              modalToLink: '/gallery',
            })
          );
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <MainWrap>
        <h1>수리가 만든 추억을 공유해주세요!</h1>
        <FormWrap onSubmit={onSubmit}>
          <FormInput
            type="text"
            placeholder="제목"
            value={title}
            onChange={onChange}
          />
          <FormLabel htmlFor="input-file">
            <span>첨부파일 등록</span>
            <input
              id="input-file"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleAddImages}
            />
          </FormLabel>
          <FileWrap>
            {imageFile.map((item, i) => (
              <FileTitle key={i}>
                <p>{item.name}</p>
                <FontAwesomeIcon
                  icon={faXmark}
                  size="lg"
                  onClick={() => handleDeleteImages(i)}
                />
              </FileTitle>
            ))}
          </FileWrap>
          <AlertWrap>
            <p>
              * 음란, 폭력, 정치적인 내용의 이미지가 포함되었을 경우,
              <br />
              관리자에 의해 해당 게시글이 비공개 처리될 수 있습니다.
            </p>
            <p>* JPG, JPEG, PNG만 등록 가능합니다.</p>
          </AlertWrap>
          <CustomBtn
            type="submit"
            $border={COLORS.grey}
            $fontColor={COLORS.white}
            $bgColor={COLORS.orange}
            text="파일 등록"
            onClick={onSubmit}
          />
        </FormWrap>
        <CustomLink
          to="/gallery"
          $border={COLORS.grey}
          $fontColor={COLORS.white}
          $bgColor={COLORS.orange}
          text="GO TO LIST"
        />
      </MainWrap>
      {modal.isOpen && <Alert />}
    </>
  );
};

export default GalleryWritePage;
