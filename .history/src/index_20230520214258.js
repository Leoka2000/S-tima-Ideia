import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutesMain from './routes';
import { GridLoader } from 'react-spinners';

const root = ReactDOM.createRoot(document.getElementById('root'));


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<GridLoader color="#36D7B7" size={20} />}>
      {isLoading ? (
        <div className="loading-container">
          <GridLoader color="#f44336 " size={20} />
        </div>
      ) : (
        <RoutesMain />
      )}
    </Suspense>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
