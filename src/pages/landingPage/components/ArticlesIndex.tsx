import { ErrorBoundary } from 'react-error-boundary';

import Articles from './Articles';
import ErrorDisplayer from '@/components/ErrorHandlers/ErrorDisplayer';


  function ErrorFallback() {
    return (
      <ErrorDisplayer 
        title="ups!" 
        errorMessage="Vi klarte ikke hente artiklene. Prøv igjen senere."
        errorCode={500} 
      />
    );
  }


  
const ArticlesIndex = () => {
    return ( 
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Articles />
        </ErrorBoundary>
    )
}

export default ArticlesIndex;