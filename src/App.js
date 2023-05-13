import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Player from "./components/Player";
import Movies from './pages/Movies'
import TVShows from "./pages/TVShows";
import UserListedMovies from "./pages/UserListedMovies";


function App() {
  return (
    <div >
  <Routes>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
    <Route exact path="player" element={<Player/>}/>
    <Route exact path="/movies" element={<Movies/>}/>
    <Route exact path="/tv" element={<TVShows/>}/>
    <Route exact path="/mylist" element={<UserListedMovies/>}/>

    <Route exact path="/" element={<Netflix/>}/>
    <Route/>
    <Route/>
  </Routes>
    </div>
  );
}

export default App;
