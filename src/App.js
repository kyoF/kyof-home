import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home';
import EditDocument from './components/editDocument';
import Login from './components/login';
import Admin from './components/admin';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' component={Home} />
            <Route path='/editDocument' component={EditDocument} />
            <Route path='/login' component={Login} />
            <Route path='/admin' component={Admin} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
