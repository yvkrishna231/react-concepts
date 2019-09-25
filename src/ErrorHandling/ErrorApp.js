import React from 'react';
import ErrorText from './ErrorText';
import ErrorBoundary from './ErrorBoundary';

class ErrorApp extends React.Component {
    render() {
        return (
            <div className='text-center text-success mt-5'>
                <ErrorBoundary>
                    <ErrorText heroname='superman' />
                </ErrorBoundary>
                <ErrorBoundary>
                    <ErrorText heroname='batman' />
                </ErrorBoundary>
                <ErrorBoundary>
                    <ErrorText heroname='joker' />
                </ErrorBoundary>
            </div>
        )
    }
}
export default ErrorApp;