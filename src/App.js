import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import About from './components/Header/About';

function App() {
  return (
    <div className="App">
      <div className="sst">
        <Navbar />
      </div>
      <div className="sss">
        <Header />
        <Services />
        <About />
        <Footer />
      </div>
    </div>
  );
} 

export default App;
