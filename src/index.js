import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Usestate from './Hooks/Usestate/Usestate';
//import Useeffect from './Hooks/Useeffect/Useeffect';
//import UseContext from './Hooks/Usecontext/Usecontext';
import Conditional from './Conditional';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Conditional/>
  </React.StrictMode>
);


reportWebVitals();
