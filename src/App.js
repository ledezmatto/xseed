import { Routes, Route } from "react-router-dom";
import CharacterPage from "pages/Characters";
import FavoritePage from "pages/Favorites";

import Sidebar from "components/molecules/SideBar";

function App() {
  return (
    <>
      <Sidebar />
      <div className="blackBackground">
        <Routes>
          <Route path="/" exact element={<CharacterPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
