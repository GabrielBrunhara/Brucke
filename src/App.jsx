import GlobalStyle from './styles/globalStyle';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Contact from './components/Contact/inde';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Header />
      <Services />
      <Contact />

      {/*<About handleScrollToSection={handleScrollToSection} />
      <Projects handleScrollToSection={handleScrollToSection} />
      <Contact handleScrollToSection={handleScrollToSection} handleAnimate={handleAnimate} />
      <Footer /> */}
    </>
  );
}

export default App;
