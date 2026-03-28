import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: 'workout',
        element: <Work />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  },
]);
