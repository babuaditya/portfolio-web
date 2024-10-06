import { useEffect, useState } from 'react';

const useDesktopMode = () => {
  const [showModal, setShowModal] = useState(false);
  const [isDesktopMode, setIsDesktopMode] = useState(false);

  useEffect(() => {
    const setDesktopMode = () => {
      const userAgent = navigator.userAgent.toLowerCase();
    //   alert(JSON.stringify(userAgent));
      if (window.innerWidth<1024) {
        Object.defineProperty(navigator, 'userAgent', {
          value: userAgent.replace('mobile', 'desktop'),
          configurable: true,
        });
        setShowModal(true);
        setIsDesktopMode(true);
        // setShowModal(false);
      }
    };

    setDesktopMode();
    window.addEventListener('resize', setDesktopMode);

    return () => {
      window.removeEventListener('resize', setDesktopMode);
    };
  }, []);

  return { showModal, isDesktopMode };
};

export default useDesktopMode;
