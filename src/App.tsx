import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import LandingPage from './pages/landingPage';
import EditorPage from './pages/editorPage';
import Articles from './pages/articlesPage';
import Article from './pages/articlePage';
import NotFoundPage from './pages/notFoundpage';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '@/firebase.config';
import { loginSuccess, logout } from '@/store/slices/authentication/authSlice';
import { FirebaseUser } from '@/models/firebaseUserModel';

function App() {
  // Check if user is logged in
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('User state changed. Current user: ', user)
      if (user) {
        const firebaseUser: FirebaseUser = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          // include other properties as needed
        };
        dispatch(loginSuccess(firebaseUser));
      } else {
        dispatch(logout());
      }
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  
  return (
    <BrowserRouter>       
          <Navbar/>
          { /* Make footer stick to bottom */}
          <div className='grid h-screen grid-rows-[1fr,auto]'>
              <Routes>
                  <Route path="/" element={<LandingPage/>}/>
                  <Route path="/jobbsokeren" element={<EditorPage/>}/>
                  <Route path="/artikler" element={<Articles/>}/>
                  <Route path="/artikler/:slug" element={<Article/>}/>
                  <Route path="*" element={<NotFoundPage/>}/>
              </Routes>
            <Footer/>
          </div>   
    </BrowserRouter>
  )
} 

export default App
 