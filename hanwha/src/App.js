import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import FindPwPage from './pages/auth/FindPwPage';
import PlayerList from './pages/players/PlayerList';
import PositionList from './pages/players/PositionList';
import PlayerDetail from './pages/players/PlayerDetail';
import VotePage from './pages/vote/VotePage';
import VoteList from './pages/vote/VoteList';
import VoteEnd from './pages/vote/VoteEnd';
import VoteResult from './pages/vote/VoteResult';
import VoteRank from './pages/vote/VoteRank';
import GalleryPage from './pages/gallery/GalleryPage';
import GalleryListPage from './pages/gallery/GalleryListPage';
import GalleryPostPage from './pages/gallery/GalleryPostPage';
import GalleryWritePage from './pages/gallery/GalleryWritePage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/findpw" element={<FindPwPage />} />
        <Route path="/players" element={<PlayerList />} />
        <Route path="/players/pitcher" element={<PositionList />} />
        <Route path="/players/detail" element={<PlayerDetail />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/vote/list" element={<VoteList />} />
        <Route path="/vote/end" element={<VoteEnd />} />
        <Route path="/vote/result" element={<VoteResult />} />
        <Route path="/vote/rank" element={<VoteRank />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/list" element={<GalleryListPage />} />
        <Route path="/gallery/post" element={<GalleryPostPage />} />
        <Route path="/gallery/write" element={<GalleryWritePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
