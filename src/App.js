import React from 'react';
import TodoApp from './component/TodoApp/TodoApp';
import './component/TodoApp/TodoApp.css'
import Header from './component/Header/header'
import About from './component/About/about'
import {BrowserRouter as Router , Route} from 'react-router-dom'


function App() {
  return (
      <Router>
        <Header/>
        <Route path="/" exact component={TodoApp}/>
        <Route path="/About" component={About}/>
      </Router>
  );
}

export default App;
