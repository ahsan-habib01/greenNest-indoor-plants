import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="space-y-9">
        <Navbar></Navbar>
      </header>
      <main className="max-w-screen mx-auto w-full flex-1">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;