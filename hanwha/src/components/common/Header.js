import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMin, mediaMax } from '../../utils/media';
import hanwha_logo from '../../assets/logo/hanwha_logo.png';
import hanwha_wordmark from '../../assets/logo/hanwha_wordmark.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faX } from '@fortawesome/free-solid-svg-icons';

const HeaderWrap = styled.header`
  display: flex;
  position: sticky;
  z-index: 100;
  top: 0;
  height: ${SIZES.toolbar};
  align-items: center;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  border-bottom: 1px solid ${COLORS.grey};
  ${mediaMax.medium`
    justify-content: space-between;
    z-index: 2000;
  `};
`;
const LogoLink = styled(Link)`
  display: inline-block;
  padding: 0 24px;
  height: ${SIZES.toolbar};
  line-height: ${SIZES.toolbar};
  cursor: pointer;
`;
const LogoImg = styled.img`
  height: 48px;
  vertical-align: middle;
  margin-bottom: 2px;
`;
const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  ${mediaMax.medium`
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${COLORS.dark}; 
    position: fixed; 
    top: 0; 
    right: 0; 
    width: 50vw;
    height: 100vh; 
    transition: transform 0.5s ease-in-out;
    transform: ${(props) =>
      props.$isMenuOpen ? 'translateX(0)' : 'translateX(100%)'};
  `};
  ${mediaMax.small`
    width: 60vw;
  `};
`;
const MobileMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid ${COLORS.grey};
  padding: 20px;
  ${mediaMax.medium`
    font-size: ${SIZES.tbxlarge};
  `};
  ${mediaMin.large`
    display: none;
  `};
`;
const NavWrap = styled.nav`
  ${mediaMax.medium`
    text-align: end;
    flex-grow: 1; 
    padding: 20px;
  `};
`;
const NavItem = styled.li`
  font-weight: 700;
  a {
    display: inline-block;
    height: ${SIZES.toolbar};
    line-height: ${SIZES.toolbar};
    ${mediaMin.large`
      padding: 0 1em;
    `};
    ${mediaMax.small`
      height: 50px;
      line-height: 50px;
    `};
  }
  &:first-child {
    color: ${COLORS.orange};
    font-family: 'Audiowide', sans-serif;
  }
  ${mediaMin.large`
    display: inline-block;
    font-size: ${SIZES.ltsmall};
  `};
  ${mediaMax.medium`
    text-align: end;
    flex-grow: 1; 
    padding: 15px;
    font-size: ${SIZES.tblarge};
  `};
  ${mediaMax.small`
    padding: 10px;
    font-size: ${SIZES.mbmedium};
  `};
`;
const MenuBtn = styled.button`
  all: unset;
  margin-right: 24px;
  color: ${COLORS.orange};
  ${mediaMax.medium`
    font-size: ${SIZES.tbxlarge};
  `};
  ${mediaMin.large`
    display: none;
  `};
`;
const AuthWrap = styled.ul`
  ${mediaMin.large`
    font-size: ${SIZES.ltsmall};
    font-weight: 700;
    color: ${COLORS.grey};
  `};
  ${mediaMax.medium`
    background-color: ${COLORS.grey};
    padding: 20px;
    text-align: center;
    div {
      display: flex;
      justify-content: center;
      gap: 30px;
    }
  `};
  ${mediaMax.small`
    div {
      gap: 15px;
    }
  `};
`;
const AuthItem = styled.li`
  a {
    ${mediaMin.large`
      padding: 0 0.8em;
    `};
  }
  ${mediaMin.large`
    display: inline-block;
    height: ${SIZES.toolbar};
    line-height: ${SIZES.toolbar};
  `};
  ${mediaMax.medium`
    border: 1px solid ${COLORS.white};
    border-radius: 8px;
    padding: 0.6em 1.2em;
    width: 4em;
    font-size: ${SIZES.tbmedium};
  `};
  ${mediaMax.small`
    padding: 1em 2em;
    font-size: ${SIZES.mbsmall};
  `};
  &:last-child {
    ${mediaMin.large`
      margin-right: 24px;
    `};
  }
`;
const HanwhaImg = styled.img`
  ${mediaMin.large`
    display: none;
  `};
  display: inline-block;
  padding: 0 24px;
  height: 100px;
  line-height: 100px;
  ${mediaMax.small`
    height: 60px;
    line-height: 60px;
  `};
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <HeaderWrap>
      <h1>
        <LogoLink to="/">
          <LogoImg src={hanwha_logo} alt="홈으로" />
        </LogoLink>
      </h1>
      <MenuBtn onClick={() => setIsMenuOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </MenuBtn>
      <MenuWrap $isMenuOpen={isMenuOpen}>
        <MobileMenu>
          <h1>
            <FontAwesomeIcon onClick={() => navigate('/')} icon={faHouse} />
          </h1>
          <h1>
            <FontAwesomeIcon onClick={() => setIsMenuOpen(false)} icon={faX} />
          </h1>
        </MobileMenu>
        <NavWrap>
          <ul>
            <NavItem>
              <Link to="/">EAGLES</Link>
            </NavItem>
            <NavItem>
              <Link to="/players">PLAYERS</Link>
            </NavItem>
            <NavItem>
              <Link to="/vote">VOTE</Link>
            </NavItem>
            <NavItem>
              <Link to="/chat">CHAT</Link>
            </NavItem>
            <NavItem>
              <Link to="/gallery">GALLERY</Link>
            </NavItem>
          </ul>
        </NavWrap>
        <AuthWrap>
          <HanwhaImg src={hanwha_wordmark} alt="한화 로고 이미지" />
          <div>
            <AuthItem>
              <Link to="/login">LOGIN</Link>
            </AuthItem>
            <AuthItem>
              <Link to="/register">JOIN US</Link>
            </AuthItem>
          </div>
        </AuthWrap>
      </MenuWrap>
    </HeaderWrap>
  );
};

export default Header;
