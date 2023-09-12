
import { createBrowserRouter } from "react-router-dom";

import App from './App';
import Home from './components/Listings';
import About  from './components/About'
import Car  from './components/Car'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            
            },
            {
                path: "/about",
                element: <About />, 
            },
            {
                path: "/car/:id",
                element: <Car />, 
            }
        ]
    },
]);

export default router;
