import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <RouterProvider router={router} />;
}
