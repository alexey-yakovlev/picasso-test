import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PostPage, PostsPage } from '@/pages';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
