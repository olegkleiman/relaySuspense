import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import RelayEnvironment from './Environment';
import ErrorBoundary from './ErrorBoundary';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <RelayEnvironmentProvider environment={RelayEnvironment}>
        <ErrorBoundary fallback={({ error }) => `Error: ${error.message + ': ' + error.stack}`}>
            <React.Suspense fallback={<div>loading suspense</div>}>
                <App />
            </React.Suspense>
        </ErrorBoundary>
    </RelayEnvironmentProvider>    
)