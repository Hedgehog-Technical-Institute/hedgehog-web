import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import { useNavigate, useLocation } from 'react-router-dom';



const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('redirect');
    if (redirectPath && location.pathname === '/') {
      // Remove query param and navigate to correct path
      navigate(redirectPath, { replace: true });
    }
  }, [navigate, location])


  return (
    <>
      <ScrollToTop/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App
