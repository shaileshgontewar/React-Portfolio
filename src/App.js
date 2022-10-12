import "./App.css";
import About from "./component/About";
import Banner from "./component/Banner";
import Contect from "./component/Contect";
import Header from "./component/Header";
import Portfolio from "./component/Portfolio";
import Resume from "./component/Resume";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Portfolio />
      <Resume />
      <Contect />
      <Footer />
    </div>
  );
}

export default App;
