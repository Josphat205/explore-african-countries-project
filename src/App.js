import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CountryDetails from './components/CountryDetails';
import Error404 from './components/Error404';
import CountryList from './components/CountryList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/country/:username" element={<CountryDetails />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
