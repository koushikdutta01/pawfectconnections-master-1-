import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { NearbyPets } from "./components/NearbyPets";
import { Avlpet } from "./components/Avlpet";

import { Footer } from "./components/Footer";
import ContactForm from "./components/connect";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <NearbyPets />
      <Avlpet />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
