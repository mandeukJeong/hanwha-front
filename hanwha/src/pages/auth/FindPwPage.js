import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import hanwha_wordmark from '../../assets/logo/hanwha_wordmark.png';

const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
`;
const FindPwWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(90vh - 76px);
  ${mediaMax.small`
    height: calc(100vh - 76px);
  `};
`;
const LogoLink = styled(Link)`
  display: inline-block;
  cursor: pointer;
  height: 120px;
  line-height: 120px;
  margin-bottom: 0.5em;
  ${mediaMax.medium`
    height: 150px;
    line-height: 150px;
  `};
  ${mediaMax.small`
    height: 100px;
    line-height: 100px;
  `};
`;
const LogoImg = styled.img`
  height: 100%;
`;
const FormWrap = styled.form`
  width: 35%;
  max-width: 550px;
  margin-bottom: 40px;
  ${mediaMax.medium`
    width: 80%;
    margin-bottom: 35px;
  `};
  ${mediaMax.small`
    margin-bottom: 30px;
  `};
`;
const AuthInput = styled.input`
  color: ${COLORS.white};
  width: 100%;
  border-radius: 10px;
  border: 2px solid ${COLORS.grey};
  background-color: inherit;
  padding: 18px;
  font-size: ${SIZES.ltxsmall};
  margin-bottom: 20px;
  ${mediaMax.medium`
    padding: 18px;
    font-size: ${SIZES.tbmedium};
    margin-bottom: 18px;
  `};
  ${mediaMax.small`
    padding: 15px;
    font-size: ${SIZES.mbmedium};
    margin-bottom: 15px;
  `};
  &:last-of-type {
    margin-bottom: 0;
  }
`;
const ErrorWrap = styled.div`
  text-align: center;
  margin: 30px 0;
  font-size: ${SIZES.ltxsmall};
  font-weight: 600;
  color: red;
  ${mediaMax.medium`
    margin: 35px 0;
    font-size: ${SIZES.tbmedium};
  `};
  ${mediaMax.small`
    margin: 25px 0;
    font-size: ${SIZES.mbmedium};
  `};
`;
const AlertWrap = styled.div`
  margin-bottom: 20px;
  font-size: ${SIZES.ltxsmall};
  font-weight: 600;
  color: ${COLORS.orange};
  ${mediaMax.medium`
    margin-bottom: 18px;
    font-size: ${SIZES.tbmedium};
  `};
  ${mediaMax.small`
    margin-bottom: 15px;
    font-size: ${SIZES.mbmedium};
  `};
`;
const SubmitBtn = styled.button`
  width: 100%;
  background-color: ${COLORS.dark};
  color: ${COLORS.white};
  cursor: pointer;
  font-weight: 700;
  border: none;
  font-size: ${SIZES.ltsmall};
  padding: 20px 30px;
  ${mediaMax.medium`
    font-size: ${SIZES.tbmedium};
    padding: 24px 34px
  `};
  ${mediaMax.small`
    font-size: ${SIZES.mbmedium};
    padding: 15px 25px;
  `};
`;

const FindPwPage = () => {
  return (
    <MainWrap>
      <FindPwWrap>
        <h1>
          <LogoLink to="/">
            <LogoImg src={hanwha_wordmark} alt="홈으로" />
          </LogoLink>
        </h1>
        <FormWrap>
          <AuthInput type="text" placeholder="이메일" autoComplete="off" />
          <AlertWrap>
            <p>인증번호가 전송되었습니다.</p>
          </AlertWrap>
          <AuthInput type="text" placeholder="인증번호" autoComplete="off" />
          <AlertWrap>
            <p>인증번호가 일치합니다.</p>
          </AlertWrap>
          <AuthInput
            type="password"
            placeholder="비밀번호"
            autoComplete="off"
          />
          <AuthInput
            type="password"
            placeholder="비밀번호 확인"
            autoComplete="off"
          />
          <ErrorWrap>
            <p>비밀번호가 일치하지 않습니다.</p>
          </ErrorWrap>
          <SubmitBtn type="submit">SUBMIT</SubmitBtn>
        </FormWrap>
      </FindPwWrap>
    </MainWrap>
  );
};

export default FindPwPage;
