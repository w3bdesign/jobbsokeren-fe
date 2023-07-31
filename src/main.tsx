import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux'

import App from './App'
import MainErrorDisplayer from './components/ErrorHandlers/MainErrorDisplayer';
import { store } from '@/store/store'
import './index.css'

function ErrorFallback({ resetErrorBoundary } : { resetErrorBoundary: () => void}) {
  return (
    <MainErrorDisplayer 
      title="ups!" 
      errorMessage="Noe har gått galt og tjenester er nede. Prøv igjen senere"
      errorCode={500} 
      resetErrorBoundary={resetErrorBoundary}
    />
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
    </React.StrictMode>,
  </ErrorBoundary>
)
