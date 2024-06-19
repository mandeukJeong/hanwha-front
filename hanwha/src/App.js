import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import FindPwPage from './pages/auth/FindPwPage';
import PlayerList from './pages/players/PlayerList';
import NotFound from './pages/NotFound';

const MainWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <MainWrap>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/findpw" element={<FindPwPage />} />
        <Route path="/player" element={<PlayerList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </MainWrap>
  );
};

export default App;
