import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import { useSelector, useDispatch } from 'react-redux';
import { changeModalInfo } from '../../store/modal';
import CustomLink from './CustomLink';

const ModalWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;
const ModalContent = styled.div`
  background-color: ${COLORS.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 500px;
  height: 300px;
  gap: 50px;
  ${mediaMax.small`
    width: 300px;
    height: 250px;
  `};
`;
const ModalText = styled.p`
  color: ${COLORS.white};
  font-weight: 500;
  font-size: ${SIZES.ltsmall};
  ${mediaMax.small`
    font-size: ${SIZES.tbmedium};
  `};
`;
const ModalBtn = styled.button`
  border: none;
  background-color: inherit;
  padding: 0;
`;

const Alert = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      changeModalInfo({
        isOpen: false,
        modalText: '',
        modalBtnText: '',
        modalToLink: null,
      })
    );
  };

  return (
    <ModalWrap>
      <ModalContent>
        <ModalText>{modal.modalText}</ModalText>
        <ModalBtn onClick={onClick}>
          <CustomLink
            $border={COLORS.grey}
            $fontColor={COLORS.white}
            $bgColor={COLORS.orange}
            text={modal.modalBtnText}
            to={modal.modalToLink}
          />
        </ModalBtn>
      </ModalContent>
    </ModalWrap>
  );
};

export default Alert;
