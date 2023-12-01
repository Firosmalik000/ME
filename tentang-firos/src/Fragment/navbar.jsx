import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const sectionRef = document.getElementById(sectionId);
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(sectionRef);
  };

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-xl' : 'bg-none py-6'} fixed w-full z-20 transition-all animate__fadeInDown `}>
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="grid grid-cols-3 gap-4 mx-auto">
          <div className="btn cursor-pointer" onClick={() => scrollToSection('jumbotron')}>
            Home
          </div>
          <div className="btn cursor-pointer" onClick={() => scrollToSection('about')}>
            About
          </div>
          <div className="btn cursor-pointer" onClick={() => scrollToSection('contact')}>
            Contact
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
