import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setError(location.state.error);
  }, [location.state]);

  return (
    <div className='error'>
      <h1>Page Not Found</h1>
      <p>The page you are looking for could not be found.</p>
      {error && <p>{error}</p>}
    </div>
  );
}
