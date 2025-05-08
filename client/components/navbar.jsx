import React from 'react';

const Navbar = ({ 
  logo, 
  logoAlt, 
  title, 
  links, 
  profileName, 
  profileIcon, 
  profileIconAlt 
}) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt={logoAlt} />
        <span>{title}</span>
      </div>
      <div className="nav-links">
        {links.map((link, index) => (
          <a key={index} href={link.url}>{link.text}</a>
        ))}
      </div>
      <div className="profile">
        <span>{profileName}</span>
        <div className="profile-icon">
          <img src={profileIcon} alt={profileIconAlt} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
