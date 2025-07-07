import { StrictMode } from 'react'
// import './index.css'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { router } from './routes/Routes';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
