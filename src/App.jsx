import About from "./Components/About/About.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Mywork from "./Components/Mywork/Mywork.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Services } from "./Components/Services/Services.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import "./index.css";
import Footer from "./Components/Footer/Footer.jsx";
import CursorWater from "./Components/CursorWater/CursorWater.jsx";
const App = () => {
  return (
    <div>
      <CursorWater />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
