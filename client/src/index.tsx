import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import App from './App';

const app = document.getElementById('app');

const ErrorFallback: React.ComponentType<FallbackProps> = ({
    error,
    resetErrorBoundary,
}) => (
    <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
    </div>
)

const root = createRoot(app);

root.render(
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
  >
      <App />
  </ErrorBoundary>
)
