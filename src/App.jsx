import { Route, Routes } from "react-router-dom";
import "./App.css";
import CandyList from "./components/CandyList.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import PopularList from "./components/PopularList.jsx";
import NowPlayingList from "./components/NowPlayingList.jsx";

function App() {
  const name = "TMDB";

  return (
    <>
      <header>
        <br/>
        <h1>MOVIE LISTING FROM {name}</h1>
        <br/>
        
      </header>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Concesion" element={<CandyList />} />
          <Route path="/Popular" element={<PopularList />} />
          <Route path="/NowPlaying" element={<NowPlayingList />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
