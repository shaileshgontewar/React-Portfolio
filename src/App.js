import "./App.css";
import Header from "./component/Header";
import Portfolio from "./component/pages/Portfolio";
import Footer from "./component/Footer";
import ProjectStore from "./component/Api/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <ProjectStore>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="project" element={<Portfolio />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProjectStore>
    </div>
  );
}

export default App;
