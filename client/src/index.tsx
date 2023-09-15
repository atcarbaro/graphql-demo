import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import App from './App';

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

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
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
  >
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ErrorBoundary>
)
