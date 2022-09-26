import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Landing />
      <About />
      <Projects />
    </>
  );
}

export default App;