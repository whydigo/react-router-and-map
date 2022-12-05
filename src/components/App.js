  import '../Styles/App.css';
  import "bootstrap/dist/css/bootstrap.min.css";
  import Footer from "./Footer";
  import Header from "./Header";
  import Main from "../pages/Main";
  import Features from '../pages/Features'
  import Contacts from "../pages/Contacts"
  import { Routes, Route } from 'react-router-dom';

  
  function App() {
  return (
    <div className="text-center container">
    <Header />
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path='/features' element={<Features />} />
      <Route path="contacts" element={<Contacts />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;