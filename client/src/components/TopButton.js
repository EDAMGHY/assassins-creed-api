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
      className={`
        fixed
        bottom-10
        right-8
        inline-block
        rounded-full
        bg-hero
       sm:px-4
       sm:py-3
        px-3
       py-2
       text-white
        ${show ? 'opacity-1' : 'opacity-0'}
        transition-opacity
        duration-300
        ease-out
        z-10`}
      id='planeBtn'
    >
      <i className='fas sm:text-base text-sm fa-arrow-up'></i>
    </a>
  );
};

export default TopButton;
