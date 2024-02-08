import React from 'react';
import './error.css'

interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => (
  <div className='container-loading'>
    <p>Error: {error}</p>
  </div>
);

export default Error;
