import './App.css'
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import LandingPage from './pages/landingPage';
import EditorPage from './pages/editorPage';
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>       
          <Navbar/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/editor" element={<EditorPage/>}/>
            </Routes>
          <Footer/>   
    </BrowserRouter>
  )
} 

export default App
 