import { useDispatch } from 'react-redux';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { loginStart, loginSuccess, loginFailure } from '@/store/slices/authentication/authSlice';
import ErrorDisplayer from './ErrorDisplayer';

interface LoginProps {
  children: React.ReactNode;
}

interface FirebaseUser {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

const Login: React.FC<LoginProps> = ({ children }) => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    dispatch(loginStart());
    signInWithPopup(auth, provider)
    
      .then((result) => {
        if (result.user) {
          const firebaseUser: FirebaseUser = {
            uid: result.user.uid,
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
          };

          dispatch(loginSuccess(firebaseUser));
        }
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
        return <ErrorDisplayer title="Logg inn feilet" errorMessage={error.message} errorCode={500} />
      });
  };

  return (
    <div onClick={signInWithGoogle}>
      {children}
    </div>
  );
};

export default Login;
