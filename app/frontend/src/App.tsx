import { Route, Routes } from 'react-router';
import Provider from './context/provider';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Provider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/main' element={<Main />} />
        </Routes>/
      </Provider>

    </div>
  );
}

export default App;
