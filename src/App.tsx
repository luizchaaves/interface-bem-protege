import Header from './components/Header';
import GlobalStyles from './styles/global';
import useMedia from './hooks/useMedia';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Coverage from './pages/Coverage';
import Questions from './pages/Questions';
import Services from './pages/Services';

function App() {
  const mobile = useMedia('(max-width: 680px)');

  return (
    <div>
      <Header mobile={mobile} />
      <main>
        <Home mobile={mobile} />
        <About />
        <Services />
        <Coverage />
        <Questions />
        <Contact />
      </main>
      <GlobalStyles />
    </div>
  );
}

export default App;
