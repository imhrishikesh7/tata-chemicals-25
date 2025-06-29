import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LenisContext } from './LenisScroll';

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useContext(LenisContext);

  useEffect(() => {
    setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(0, { offset: 0 });
      } else {
        window.scrollTo(0, 0);
      }
    }, 50);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
