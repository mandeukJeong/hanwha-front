import React, { useState, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import CustomBtn from '../../components/common/CustomBtn';
import hanwha_wordmark from '../../assets/logo/hanwha_wordmark.png';
import { login } from '../../services/auth';

const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
`;
const LoginWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(90vh - 76px);
  ${mediaMax.small`
    height: calc(95vh - 76px);
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
  ${mediaMax.medium`
    padding: 18px;
    font-size: ${SIZES.tbmedium};
  `};
  ${mediaMax.small`
    padding: 15px;
    font-size: ${SIZES.mbmedium};
  `};
  &:first-child {
    margin-bottom: 20px;
    ${mediaMax.medium`
      margin-bottom: 18px;
    `};
    ${mediaMax.small`
      margin-bottom: 15px;
    `};
  }
`;
const FindPwWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 0;
  font-size: ${SIZES.ltxsmall};
  font-weight: 600;
  ${mediaMax.medium`
    margin: 35px 0;
    font-size: ${SIZES.tbmedium};
  `};
  ${mediaMax.small`
    margin: 25px 0;
    font-size: ${SIZES.mbmedium};
  `};
  p {
    color: red;
    flex-grow: 1;
  }
  a {
    color: ${COLORS.orange};
    text-decoration: underline;
  }
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
const JoinText = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: ${SIZES.ltxsmall};
  margin-bottom: 30px;
  ${mediaMax.medium`
    font-size: ${SIZES.tbmedium};
    margin-bottom: 35px;
  `};
  ${mediaMax.small`
    font-size: ${SIZES.mbmedium};
    margin-bottom: 25px;
  `};
`;

const loginReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const LoginPage = () => {
  const navigate = useNavigate();
  // const emailRegEx =
  //   /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const [errorMessage, setErrorMessage] = useState('');
  const [state, dispatch] = useReducer(loginReducer, {
    email: '',
    password: '',
  });

  const { email, password } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // input 빈 칸 존재 시
    if (Object.values({ email, password }).some((value) => value === '')) {
      setErrorMessage('빈칸을 모두 입력해주세요.');
      return;
    }

    // 이메일 형식 맞지 않을 시
    // if (!emailRegEx.test(email)) {
    //   setErrorMessage('이메일 형식이 올바르지 않습니다.');
    //   return;
    // }

    login(email, password)
      .then((response) => {
        if (response.status === 200) {
          setErrorMessage('');
          navigate('/');
        }
        // if (response.status === 201) {
        //   setErrorMessage('');
        //   navigate('/login');
        // }
      })
      .catch((e) => {
        // 존재하지 않는 계정 || 비밀번호 일치하지 않을 경우
        if (e.response.status === 401) {
          setErrorMessage(e.response.data);
        } else {
          setErrorMessage('로그인 실패');
        }
      });
  };

  return (
    <MainWrap>
      <LoginWrap>
        <h1>
          <LogoLink to="/">
            <LogoImg src={hanwha_wordmark} alt="홈으로" />
          </LogoLink>
        </h1>
        <FormWrap>
          <AuthInput
            name="email"
            value={email}
            type="text"
            placeholder="이메일"
            autoComplete="off"
            onChange={onChange}
          />
          <AuthInput
            name="password"
            value={password}
            type="password"
            placeholder="비밀번호"
            autoComplete="off"
            onChange={onChange}
          />
          <FindPwWrap>
            <p>{errorMessage}</p>
            <Link to="/findpw">비밀번호 찾기</Link>
          </FindPwWrap>
          <SubmitBtn type="submit" onClick={onSubmit}>
            LOGIN
          </SubmitBtn>
        </FormWrap>
        <JoinText>
          아직 수리가 아니신가요?
          <br />
          우리 같이 한화 이글스 응원하러 가요!
        </JoinText>
        <CustomBtn
          to="/register"
          $border={COLORS.grey}
          $fontColor={COLORS.white}
          $bgColor={COLORS.orange}
          text="JOIN US"
        />
      </LoginWrap>
    </MainWrap>
  );
};

export default LoginPage;
