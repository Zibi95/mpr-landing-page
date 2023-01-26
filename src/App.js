import { Route, Routes } from 'react-router-dom';
// COMPONENTS
import Navbar from './routes/nav/navbar.route';
import Main from './routes/main/main.route';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
