import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../constants/colors';
import hanwha_wordmark from '../../assets/logo/hanwha_wordmark.png';

const LoginWrap = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
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
  &:first-child {
    margin-bottom: 15px;
  }
`;
const FindPwWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  max-width: 500px;
  margin-bottom: 30px;
  a {
    color: ${COLORS.orange};
    font-size: 14px;
    margin-left: auto;
  }
`;
const LoginBtn = styled.button`
  width: 40%;
  max-width: 500px;
  background-color: ${COLORS.dark};
  color: ${COLORS.white};
  border: none;
  padding: 15px 0;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  margin-bottom: 50px;
`;
const JoinText = styled.p`
  color: ${COLORS.white};
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 30px;
`;
const JoinLink = styled(Link)`
  border: 1px solid ${COLORS.grey};
  border-radius: 5px;
  padding: 14px 40px;
  text-decoration: none;
  color: ${COLORS.white};
  font-size: 13px;
  font-weight: 500;
  background: linear-gradient(
    to right,
    ${COLORS.orange} 49.5%,
    ${COLORS.black} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  &:hover {
    border: 1px solid ${COLORS.orange};
    background-position: left bottom;
  }
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 13px;
  font-weight: 500;
`;

const LoginPage = () => {
  return (
    <LoginWrap>
      <LogoLink to="/">
        <img src={hanwha_wordmark} alt="홈으로" />
      </LogoLink>
      <FormWrap>
        <InputWrap>
          <AuthInput placeholder="이메일" />
          <AuthInput placeholder="비밀번호" type="password" />
        </InputWrap>
        <FindPwWrap>
          <ErrorMessage>존재하지 않는 계정입니다.</ErrorMessage>
          <Link to="/findpw">비밀번호 찾기</Link>
        </FindPwWrap>
        <LoginBtn type="submit">LOGIN</LoginBtn>
      </FormWrap>
      <JoinText>
        아직 수리가 아니신가요?
        <br />
        우리 같이 한화 이글스 응원하러 가요!
      </JoinText>
      <JoinLink to="/register">JOIN US</JoinLink>
    </LoginWrap>
  );
};

export default LoginPage;
