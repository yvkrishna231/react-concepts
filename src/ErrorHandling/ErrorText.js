import React from 'react';

const ErrorText = ({ heroname }) => {
    if (heroname === 'joker') {
        throw new Error('Not A Hero')
    }
    return (
        <h1>
            {heroname}
        </h1>
    )
}
export default ErrorText;