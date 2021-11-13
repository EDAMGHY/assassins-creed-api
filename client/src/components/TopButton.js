import React, { useEffect, useState } from 'react';

const TopButton = () => {
  const [show, setShow] = useState(false);

  const showHideTop = () => {
    let heightScroll = 200;
    const winScroll = window.scrollY;
    if (winScroll >= heightScroll) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showHideTop);
  }, []);
  return (
    <a
      href='#navbar'
      className={`transform
        -rotate-90
        fixed
        bottom-10
        right-8
        inline-block
        rounded-full
        bg-hero
        p-2
        sm:text-3xl
        text-xl text-white
        ${show ? 'opacity-1' : 'opacity-0'}
        transition-opacity
        duration-300
        ease-out
        z-10`}
      id='planeBtn'
    >
      <i className='fas fa-plane'></i>
    </a>
  );
};

export default TopButton;
