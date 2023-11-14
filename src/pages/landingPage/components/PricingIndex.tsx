import { ErrorBoundary } from 'react-error-boundary';

import Pricing from './Pricing';
import ErrorDisplayer from '@/components/ErrorHandlers/ErrorDisplayer';


function ErrorFallback() {
    return (
      <ErrorDisplayer 
        title="ups!" 
        errorMessage="Vi klarte ikke hente Prisene. Prøv igjen senere."
        errorCode={500} 
      />
    );
  }


function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Pricing />
    </ErrorBoundary>
  );
}

export default App;
