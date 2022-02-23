import Home from './views/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './views/Checkout';
import './index.css';

function App() {
  return (
      <div className="bg-slate-100 App">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/checkout' element={ <Checkout /> }/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
