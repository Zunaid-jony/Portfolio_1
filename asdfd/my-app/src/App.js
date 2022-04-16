import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Pages from './pages';
import Header from './Header';
import Test from './Test';
import About from './About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/pages" element={<Pages></Pages>}></Route>
        <Route path="/footer" element={<Footer></Footer>}></Route>
        <Route path="/test" element={<Test></Test>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
