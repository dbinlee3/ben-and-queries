import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Experience from "./pages/experience/Experience";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Landing />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Footer />
    </>
  );
}

export default App;