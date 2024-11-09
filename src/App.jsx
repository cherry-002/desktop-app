import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const updateViewportDimensions = () => {
      document.documentElement.style.setProperty(
        '--width',
        `${window.innerWidth}px`
      );
      document.documentElement.style.setProperty(
        '--height',
        `${window.innerHeight}px`
      );

    };
    updateViewportDimensions();
    window.addEventListener('resize', updateViewportDimensions);
    return () => window.removeEventListener('resize', updateViewportDimensions);
  }, []);

  return (
    <main className="bg-slate-300 w-[100vw] h-svh max-[1150px]:h-max">
      <Sidebar />
      <Outlet />
    </main>
  );
}

export default App;
