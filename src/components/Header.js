// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <div>
        <h1 className="header-title">Call a Friend</h1>
        <div className="container-divider">
          <div className="border-divider" />
          <span className="content-divider">
            <p className="secondary-title">Your friendly contact app</p>
          </span>
          <div className="border-divider" />
        </div>
      </div>
    </>
  );
};

export default Header;
