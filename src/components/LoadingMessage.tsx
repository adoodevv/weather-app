import React from 'react';

interface LoadingMessageProps {
   loading: boolean;
}

const LoadingMessage: React.FC<LoadingMessageProps> = ({ loading }) => {
   return loading ? <p className="text-lg sm:text-xl lg:text-2xl text-white">Loading...</p> : null;
};

export default LoadingMessage;
