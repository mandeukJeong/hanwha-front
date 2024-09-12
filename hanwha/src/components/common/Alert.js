import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import CustomBtn from './CustomBtn';

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
`;
const ModalText = styled.p`
  color: ${COLORS.white};
  font-size: ${SIZES.ltsmall};
  font-weight: 500;
`;
const ModalBtn = styled.button`
  border: none;
  background-color: inherit;
  padding: 0;
`;

const Alert = () => {
  return (
    <ModalWrap>
      <ModalContent>
        <ModalText>제목을 입력해주세요.</ModalText>
        <ModalBtn>
          <CustomBtn
            $border={COLORS.grey}
            $fontColor={COLORS.white}
            $bgColor={COLORS.orange}
            text="확인"
          />
        </ModalBtn>
      </ModalContent>
    </ModalWrap>
  );
};

export default Alert;
