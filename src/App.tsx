import Header from './components/Header';
import GlobalStyles from './styles/global';
import useMedia from './hooks/useMedia';

function App() {
  const mobile = useMedia('(max-width: 680px)');

  return (
    <div style={{ height: '120vh' }}>
      <Header mobile={mobile} />
      app
      <GlobalStyles />
    </div>
  );
}

export default App;
