import Header from './components/header/Header';

import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Landing />
      <About />
    </>
  );
}

export default App;