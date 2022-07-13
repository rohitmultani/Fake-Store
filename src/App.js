
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Detail from './Pages/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:anything" element={ <Detail/>} />
      </Routes>
    </Router>

  );
}

export default App;
