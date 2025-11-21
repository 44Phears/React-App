import { Route, Routes } from "react-router-dom";
import "./App.css";
import CandyList from "./components/CandyList.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import PopularList from "./components/PopularList.jsx";
import NowPlayingList from "./components/NowPlayingList.jsx";

function App() {
  const name = "Your Mom";

  return (
    <>
      <header>
        <h1>Candy Listing For {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo
          cumque sit dignissimos, consectetur nemo possimus accusamus maxime
          excepturi molestiae nesciunt, laborum corrupti quis asperiores!
        </p>
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
