// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import AddArtist from "./Components/AddArtist";
import AllSongs from "./Components/AllSongs";
import AllArtists from "./Components/AllArtists";

// Components
import Home from "./Components/Home";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import NotFound from "./Components/NotFound";
import SongDetails from "./Components/SongDetails";

const App = () => (
  <Router>
    <NavbarComponent />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/songs/:songID" element={<SongDetails />} />
      <Route path="/songs" element={<AllSongs />} />
      <Route path="/artists" element={<AllArtists />} />
      <Route path="/newartist" element={<AddArtist />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
