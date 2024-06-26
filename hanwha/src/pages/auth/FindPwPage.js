import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../constants/colors';
import hanwha_wordmark from '../../assets/logo/hanwha_wordmark.png';

const FindPwWrap = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  padding: 30px 0;
  background-color: ${COLORS.black};
  padding-top: 75.05px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LogoLink = styled(Link)`
  img {
    width: 200px;
  }
  margin-bottom: 10px;
`;
const FormWrap = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputWrap = styled.div`
  width: 40%;
  max-width: 500px;
  margin-bottom: 30px;
`;
const AuthInput = styled.input`
  width: 100%;
  background: transparent;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid ${COLORS.grey};
  color: ${COLORS.white};
  border-radius: 10px;
  font-weight: 400;
  font-size: 13px;
  &::placeholder {
    color: ${COLORS.grey};
    font-weight: 700;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
const InformText = styled.p`
  color: ${COLORS.orange};
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 20px;
`;
const SubmitBtn = styled.button`
  width: 40%;
  max-width: 500px;
  background-color: ${COLORS.dark};
  color: ${COLORS.white};
  border: none;
  padding: 15px 0;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  margin-bottom: 30px;
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const FindPwPage = () => {
  return (
    <FindPwWrap>
      <LogoLink to="/">
        <img src={hanwha_wordmark} alt="홈으로" />
      </LogoLink>
      <FormWrap>
        <InputWrap>
          <AuthInput placeholder="이메일" />
          <InformText>인증번호가 전송되었습니다.</InformText>
          <AuthInput placeholder="인증번호" />
          <InformText>인증번호가 일치합니다.</InformText>
          <AuthInput placeholder="비밀번호" type="password" />
          <AuthInput placeholder="비밀번호 확인" type="password" />
        </InputWrap>
        <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        <SubmitBtn type="submit">SUBMIT</SubmitBtn>
      </FormWrap>
    </FindPwWrap>
  );
};

export default FindPwPage;
