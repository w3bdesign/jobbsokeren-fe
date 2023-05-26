import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import LandingPage from './pages/landingPage';
import EditorPage from './pages/editorPage';
import ArticlesPage from './pages/articlesPage';
import ArticlePage from './pages/articlePage';
import ProfilePage from './pages/profilePage';
import NotFoundPage from './pages/notFoundpage';
import LoadingDisplayer from './components/LoadingDisplayerTransparent';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '@/firebase.config';
import { loginSuccess, logout } from '@/store/slices/authentication/authSlice';
import { FirebaseUser } from '@/models/firebaseUserModel';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';



function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  
  // Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
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
 