import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

import ProtectedRoute from './components/Authentication/ProtectedRoute';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar'; 
import LoadingDisplayer from './components/UI/LoadingDisplayerTransparent';
import usePageTracking from './hooks/usePageTracking';
import ArticlePage from './pages/articlePage';
import ArticlesPage from './pages/articlesPage';
import EditorPage from './pages/editorPage';
import LandingPage from './pages/landingPage';
import NotFoundPage from './pages/notFoundpage';
import ProfilePage from './pages/profilePage';
import { auth } from '@/firebase.config';
import { loginSuccess, logout } from '@/store/slices/authentication/authSlice';
import { RootState } from '@/store/store';

// Initialize Google Analytics
const Analytics_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
ReactGA.initialize(Analytics_ID);

function App() {

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  
  // Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const firebaseUser: User = user;
        dispatch(loginSuccess(firebaseUser));
      } else {
        dispatch(logout());
      }
      setLoading(false); // Set loading to false once user state is determined
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  // If still determining user state, show loading screen
  if (loading) {
    return <LoadingDisplayer/>; 
  }

  
  return (
    <BrowserRouter>       
          <Navbar/>
          { /* Track page views */}
          usePageTracking();
          { /* Make footer stick to bottom */}
          <div className='grid h-screen grid-rows-[1fr,auto]'>
              <Routes>
                  <Route path="/" element={<LandingPage/>}/>
                  <Route path="/profil" element={<ProtectedRoute user={user}><ProfilePage/></ProtectedRoute>}/>
                  <Route path="/jobbsokeren" element={<EditorPage/>}/>
                  <Route path="/artikler" element={<ArticlesPage/>}/>
                  <Route path="/artikler/:slug" element={<ArticlePage/>}/>
                  <Route path="*" element={<NotFoundPage/>}/>
              </Routes>
            <Footer/>
          </div>   
    </BrowserRouter>
  )
} 

export default App
 