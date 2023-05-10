import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import LandingPage from './pages/landingPage';
import EditorPage from './pages/editorPage';
import Articles from './pages/articlesPage';
import Article from './pages/articlePage';
import NotFoundPage from './pages/notFoundpage';
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>       
          <Navbar/>
          { /* Make footer stick to bottom */}
          <div className='grid h-screen grid-rows-[1fr,auto]'>
              <Routes>
                  <Route path="/" element={<LandingPage/>}/>
                  <Route path="/editor" element={<EditorPage/>}/>
                  <Route path="/articles" element={<Articles/>}/>
                  <Route path="/articles/:slug" element={<Article/>}/>
                  <Route path="*" element={<NotFoundPage/>}/>
              </Routes>
            <Footer/>
          </div>   
    </BrowserRouter>
  )
} 

export default App
 