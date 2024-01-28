import Footer from '@/components/molecules/Footer';
import Header from '@/components/molecules/Header';
import Announcement from '@/components/molecules/Announcement';
import '@/styles/globals.css';
import '@/styles/icomoon.css';
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from 'clsx';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 0) {
        document.body.classList.add('has-sticky-bar');
      } else {
        document.body.classList.remove('has-sticky-bar');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, [])

  return (
    <main className={clsx("bg-night-100 font-body overflow-hidden text-night-medium-emphasis")}>
      <Announcement />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
