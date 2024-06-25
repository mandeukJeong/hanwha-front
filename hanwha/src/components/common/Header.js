import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMin, mediaMax } from '../../utils/media';
import hanwha_logo from '../../assets/hanwha_logo.png';
import hanwha_wordmark from '../../assets/hanwha_wordmark.png';
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
  ${mediaMax.small`justify-content: space-between;`};
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
  ${mediaMax.small`
                flex-direction: column;
                justify-content: flex-start;
                background-color: ${COLORS.dark}; 
                position: absolute; 
                top: 0; 
                width: 50vw; 
                height: 100vh; 
                transition: all 0.5s;
                left: ${(props) => (props.$isMenuOpen ? '50%' : '100%')};`};
`;
const MobileMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${SIZES.large};
  padding-bottom: 20px;
  border-bottom: 1px solid ${COLORS.grey};
  padding: 20px;
  ${mediaMin.large`display: none;`};
`;
const NavWrap = styled.nav`
  ${mediaMax.small`text-align: end;
                  flex-grow: 1; 
                  padding: 20px;`}
`;
const NavItem = styled.li`
  font-size: ${SIZES.medium};
  font-weight: 700;
  a {
    display: inline-block;
    height: ${SIZES.toolbar};
    line-height: ${SIZES.toolbar};
    ${mediaMin.large`padding: 0 1em;`};
  }
  &:first-child {
    color: ${COLORS.orange};
    font-family: 'Audiowide', sans-serif;
  }
  ${mediaMin.large`display: inline-block;`};
`;
const MenuBtn = styled.button`
  all: unset;
  margin-right: 24px;
  font-size: ${SIZES.large};
  color: ${COLORS.orange};
  ${mediaMin.large`display: none;`};
`;
const AuthWrap = styled.ul`
  ${mediaMin.large`font-size: ${SIZES.medium};
                  font-weight: 700; 
                  color: ${COLORS.grey};`};
  ${mediaMax.small`background-color: ${COLORS.grey};
                  padding: 20px;
                  text-align: center;
                  div {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                  }`};
`;
const AuthItem = styled.li`
  a {
    ${mediaMin.large`padding: 0 0.8em;`};
  }
  ${mediaMin.large`display: inline-block; 
                  height: ${SIZES.toolbar};
                  line-height: ${SIZES.toolbar};`};
  ${mediaMax.small`border: 1px solid ${COLORS.white};
                  border-radius: 8px;
                  padding: 0.6em 2em;
                  width: 4em;
                  font-size: ${SIZES.small};`}
  &:last-child {
    ${mediaMin.large`margin-right: 24px;`};
  }
`;
const HanwhaImg = styled.img`
  ${mediaMin.large`display: none;`};
  display: inline-block;
  padding: 0 24px;
  height: ${SIZES.toolbar};
  line-height: ${SIZES.toolbar};
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
