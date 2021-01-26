import React from 'react';
import './App.css';
import Tasklist from './Tasklist';
import Tasks from './Todos';
import Nav from './Nav';
import Contact from './Contact';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/tasklist" exact component={Tasklist} />
        <Route path="/todos" exact component={Tasks} />
        <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
