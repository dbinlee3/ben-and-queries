import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Landing />
      <About />
    </>
  );
}

export default App;