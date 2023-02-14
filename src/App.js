import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// COMPONENTS
import Navbar from './routes/nav/navbar.route';
import Main from './routes/main/main.route';

function App() {
  const DownloadPage = lazy(() => import('./routes/download/Download.route'));
  const Contact = lazy(() => import('./routes/contact/Contact.route'));

  return (
    <Suspense>
      <Routes>
        <Route
          path="/"
          element={<Navbar />}>
          <Route
            index
            element={<Main />}
          />

          <Route
            path="/download"
            element={<DownloadPage />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
