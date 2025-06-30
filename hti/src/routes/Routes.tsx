import { createBrowserRouter } from "react-router-dom";

import App from "../App";
// here is we import our pages
import Home from "../pages/Home";
import PageNotFound from "../pages/404";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        {path: "", element: <Home/>},
        // etc etc
        {path:"*", element: <PageNotFound/>}
      ]
    }
  ],
)