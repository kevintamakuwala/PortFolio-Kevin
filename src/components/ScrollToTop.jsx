import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Calculate how far from the bottom the user is (10 pixels from the bottom in this case)
    const scrollPositionToBottom = documentHeight - (scrollY + windowHeight + 500);

    // Set isVisible to true if the user is near the bottom, otherwise false
    setIsVisible(scrollPositionToBottom <= 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const buttonStyle = {
    zIndex: '1000',
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: `hsl(221, 100%, 81%)`, // Dark background color
    color: '#ecf0f1', // Light text color
    border: 'none',
    borderRadius: '50%',
    padding: '15px',
    cursor: 'pointer',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
    transition: 'background-color 0.3s, color 0.3s', // Smooth color transition
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    color:"#000"
  };

  return (
    <>
      {isVisible && (
        <button
          style={buttonStyle}
          onClick={scrollToTop}
          title="Back to Top"
          aria-label="Scroll to Top"
        >
          <FaArrowUp style={iconStyle} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
