import React, { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import Home from './components/Home';

const App: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="posts" element={<Posts />}>
        <Route path="/" element={<AllPosts />} />
        <Route path=":tagCode" element={<TagPosts />} />
        <Route path=":postCode" element={<Post />} />
      </Route> */}
      <Route path="*" element={<Navigate to="/" replace />} />;
    </Routes>
  );
};

export default App;
