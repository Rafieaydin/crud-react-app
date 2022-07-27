import React from 'react';
import 'bulma/css/bulma.css'
import Table from './components/table'
import Create from './components/create'
import Edit from './components/edit'
import './App.css';
// import indexTable from './components/index';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  // Link
} from "react-router-dom";
import { render } from '@testing-library/react';

  
const App = () => {
    return (
      <Router>
      <div className="container is-widescreen is-fullhd is-fluid  mt-6">
      
      <p className="title is-1 columns  is-centered ">Crud React JS</p>
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth ">
          <Routes>
              <Route exact path="/" element={<Table />}></Route>
              <Route path="/create" element={<Create />}></Route>
              <Route path="/edit/:id" element={<Edit />}></Route>
          </Routes>
          </div>
        </div>
      </div>
      </Router>
    )

}
export default App;
