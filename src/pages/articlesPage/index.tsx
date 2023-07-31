import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Articles from './components/Articles';
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
  

const ArticlesPage: React.FC = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Articles />
        </ErrorBoundary>
    )
}

export default ArticlesPage
