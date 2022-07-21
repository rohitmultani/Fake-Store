
import './App.css';
import Home from './Pages/Home';
import {Fragment} from 'react'
import { Router,Routes,Route } from 'react-router-dom';
import Detail from './Pages/Detail';
import store from './Utils/Store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Fragment>
    <Provider store={store}>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:anything" element={ <Detail/>} />
      </Routes>
    
    </Provider>
    </Fragment>
  );
}

export default App;
