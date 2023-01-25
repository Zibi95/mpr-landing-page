import { Route, Routes } from 'react-router-dom';
// COMPONENTS
import Navbar from './routes/nav/navbar.route';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}></Route>
    </Routes>
  );
}

export default App;
