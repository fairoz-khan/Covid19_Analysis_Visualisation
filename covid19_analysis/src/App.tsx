import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/navbar';
import { India } from './dashboards/india';
import { World } from './dashboards/world';
import { Map } from './dashboards/map';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/india" element={<India />} />
        <Route path="/world" element={<World />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
