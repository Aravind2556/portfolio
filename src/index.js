import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { App } from './App';

import DataContext from './components/DataContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <DataContext>


 <App/>
   
   

  
  </DataContext>
 
);


