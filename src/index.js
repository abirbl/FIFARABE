import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*import 'semantic-ui-css/semantic.min.css'*/
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Weather from './components/weather';
import Islam from './components/Islam';
import Planning from './components/Planning';
import Translate from './components/Translate';

const router = createBrowserRouter([
  {
    path:"weather",
    element:<Weather/>,
  },
  {
    path:"islam",
    element:<Islam/>,
  },
  {
    path:"match",
    element:<Planning/>,
  },
  {
    path:"traduction",
    element:<Translate/>,
  },
  {
    path:"/",
    element:<App/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
