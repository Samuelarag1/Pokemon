import './App.css'
import FirstPage from './components/FirstPage/FirstPage.jsx'; 
import { Routes, useLocation, NavLink, Route, useNavigate} from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import FormPage from './components/FormPage/FormPage.jsx';
import DetailPage from './components/DetailPage/DetailPage.jsx';
import { useEffect } from 'react';
import SecondPage from './components/SecondPage/SecondPage.jsx'
const App = ()  => {
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  },[])


  return (
    <div> 

    {location.pathname === '/home' && <SearchBar/>}
      <Routes>

        
        
        <Route path='/home' element={<SecondPage/>} />
         <Route path='/' element={<FirstPage/>} />
        

        <Route path='/detail' element={<DetailPage/>} />
        <Route path='/newUser' element={<FormPage/>} />
      </Routes>    
      </div>
  );
}

export default App
