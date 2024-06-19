import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../constants/colors';
import hanwha_logo from '../../assets/hanwha_logo.png';

const HeaderWrap = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${COLORS.black};
  border-bottom: 1px solid ${COLORS.grey};
`;
const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  img {
    width: 50px;
  }
`;
const MenuLink = styled(Link)`
  color: ${COLORS.white};
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;

  &:nth-child(2) {
    color: ${COLORS.orange};
    font-family: 'Audiowide', sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;
const AuthLink = styled(Link)`
  color: ${COLORS.grey};
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderMenu>
        <Link to="/">
          <img src={hanwha_logo} alt="홈으로" />
        </Link>
        <MenuLink>EAGLES</MenuLink>
        <MenuLink>PLAYERS</MenuLink>
        <MenuLink>VOTE</MenuLink>
        <MenuLink>GALLERY</MenuLink>
      </HeaderMenu>
      <HeaderMenu>
        <AuthLink to="/login">LOGIN</AuthLink>
        <AuthLink>JOIN US</AuthLink>
      </HeaderMenu>
    </HeaderWrap>
  );
};

export default Header;
