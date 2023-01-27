import { Route, Routes } from 'react-router-dom';
// COMPONENTS
import Navbar from './routes/nav/navbar.route';
import Main from './routes/main/main.route';
import DownloadPage from './routes/download/Download.route';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/*" element={<Main />} />
        <Route path="/download" element={<DownloadPage />} />
      </Route>
    </Routes>
  );
}

export default App;
