import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

import * as ripple from "./ripple.json";
import * as blob from "./blob.json";

import './Loader.css'
import Header from '../Header/Header'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import ScrollDown from '../ScrollDown/ScrollDown'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: ripple.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    },
};
const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: blob.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    },
};

function getWindowDimensions() {
  const { innerWidth: w, innerHeight: h} = window;
  return {
    w,
    h
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function Loader() {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(undefined);
    const [completed, setcompleted] = useState(undefined);
    const { h, w } = useWindowDimensions();
    
    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => {
            console.log(json);
            setData(json);
            setloading(true);
            setTimeout(() => {
            setcompleted(true);
            }, 500);
            });
        }, 2000);
    }, []);
    return (
    <>
    {!completed ? (
    <>
    {!loading ? (
    <Lottie options={defaultOptions2} height={h} width={w} />
    ) : (
    <Lottie options={defaultOptions2} height={h} width={w} />
    )}
    </>
    ) : (
    <>
    <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
    <ScrollDown />
    <ScrollToTop />
    <Footer />
    </>
    )}
    </>
    );
}
export default Loader;