import { createBrowserRouter } from "react-router-dom";

import App from "../App";
// here is we import our pages
import Home from "../pages/Home";
import Events from "../pages/Events";
// import Event from "../pages/Event";
// import Game from "../pages/Game";
import Community from "../pages/Community";
import PageNotFound from "../pages/404";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        {path: "", element: <Home/>},
        {path: "/events", element: <Events/>},
        // {path: "/events/:eventId", element: <Event/>},
        // {path: "/events/:eventId/:gameId", element: <Game/>},
        {path: "/community", element: <Community/>},
        // etc etc
        {path:"*", element: <PageNotFound/>}
      ]
    }
  ],
)