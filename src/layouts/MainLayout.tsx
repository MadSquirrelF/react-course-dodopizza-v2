import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import SecondHeader from '../components/SecondHeader';
const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <SecondHeader />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
