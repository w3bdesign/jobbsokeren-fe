// pages/ArticlePage.tsx
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ArticleContent from './Article'; './Article';
import ErrorDisplayer from '@/components/ErrorHandlers/ErrorDisplayer';


const ArticlePage : React.FC = () => {

  function ErrorFallback() {
    return (
      <ErrorDisplayer 
        title="ups!" 
        errorMessage="Vi klarte ikke hente artikkelen. Prøv igjen senere."
        errorCode={500} 
      />
    );
  }


  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ArticleContent />
    </ErrorBoundary>
  );
}

export default ArticlePage;
