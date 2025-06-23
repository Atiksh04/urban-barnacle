import React from "react";
import LookbookComponent from '../components/LookBooks';
import Footer from '../components/Footer';

export default function Lookbook() {
  return (
    <div className="mx-auto w-full min-h-screen flex flex-col">
      <div style={{ minHeight: 'calc(100vh - 60px)' }}>
        <LookbookComponent/>
      </div>
      <Footer />
    </div>
  );
}
