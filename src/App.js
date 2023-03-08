import React from "react";
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import About from './components/About'
import Welcome from "./components/Welcome";
import { createTheme, ThemeProvider } from '@mui/material';
import ScrollToTop from 'react-scroll-to-top'
import { useRef } from "react";


const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto Slab',

    ].join(','),
  },
});

const scrollToBottom = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth',
  });
};

function App() {
  return (

    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <div className="App">

        <Welcome></Welcome>
        <Navbar></Navbar>
        <Projects  ></Projects>
        <About ></About>
      </div>
    </ThemeProvider>

  );
}

export default App;
