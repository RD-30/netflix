import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGsapScrollTrigger = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // adjust based on layout
            toggleActions: "play none none none",
            once: true, // animation triggers only once
            // markers: true // uncomment to debug
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

export default useGsapScrollTrigger;
