import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { SeccionOne } from './components/seccionOne/SeccionOne';
import SeccionTwo from './components/seccionTwo/SeccionTwo';

function App() {
  const sections = [<SeccionOne />, <SeccionTwo />];
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = (event) => {
    const delta = event.deltaY;
    const currentIndex = activeSection;

    if (delta > 0 && currentIndex < sections.length - 1) {
      setActiveSection(currentIndex + 1);
    } else if (delta < 0 && currentIndex > 0) {
      setActiveSection(currentIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchStartY = e.touches[0].clientY;

    const handleTouchMove = (e) => {
      const touchMoveY = e.touches[0].clientY;
      const deltaY = touchStartY - touchMoveY;

      if (deltaY > 20 && activeSection < sections.length - 1) {
        setActiveSection(activeSection + 1);
      } else if (deltaY < -20 && activeSection > 0) {
        setActiveSection(activeSection - 1);
      }
    };

    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
    handleScroll(e);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [activeSection]);
  const handleClickCircle = (index) => {
    setActiveSection(index);
    const element = document.getElementById(`seccion-${index}`);
    if(element){
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  };
  return (
    <div className='bg-fondo'>
      <Header />
      <div className="sections-container" onTouchStart={handleTouchStart}>
        {sections.map((Section, idx) => (
          <div
            key={idx}
            className={`section mt-14`}
            id={`seccion-${idx}`}
          >
            {Section}
          </div>
        ))}

      </div>
      <div className='h-16 w-full flex justify-center'>
        {
          sections.map((item, idx) => (
            <div className='flex items-center justify-center' key={idx}>
              <button
                onClick={() => handleClickCircle(idx)}
                className={`block w-8 h-8 border-2 border-fondo-celeste rounded-full ${idx === activeSection ? 'bg-fondo-celeste' : 'bg-fondo'}`}>

                </button>
              {
                idx < sections.length - 1 &&
                <span className='h-1 w-10 bg-fondo-celeste'></span>
              }
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
