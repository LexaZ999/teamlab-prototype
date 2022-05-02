import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header.jsx';
import AccelerationPrograms from './pages/AccelerationPrograms.jsx';
import Internships from './pages/Internships.jsx';
import MyProfile from './pages/MyProfile.jsx';
import NotFound from './pages/NotFound.jsx';
import Testing from './pages/Testing.jsx';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="my-profile" element={<MyProfile />} />
      <Route path="company-for-internship" element={<Internships />} />
      <Route path="acceleration-programs" element={<AccelerationPrograms />} />
      <Route path="testing" element={<Testing />} />
    </Routes>
  </BrowserRouter>
);

export default App;
