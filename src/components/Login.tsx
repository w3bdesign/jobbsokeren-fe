import { useDispatch } from 'react-redux';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { loginStart, loginSuccess, loginFailure } from '@/store/slices/authentication/authSlice';
import ErrorDisplayer from './ErrorDisplayer';
import { User } from "firebase/auth";


interface LoginProps {
  children: React.ReactNode;
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
          dispatch(loginSuccess(result.user as User));
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
