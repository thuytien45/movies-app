import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NowPlaying from './pages/NowPlaying';
import TopRated from './pages/TopRated';
import MovieDetail from './pages/MovieDetail';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NowPlaying />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
