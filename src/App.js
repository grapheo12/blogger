import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/tech' component={ Home } />
          <Route path='/lit' component={ Home } />
          <Route path='/meme' component={ Home } /> 
        </Switch>
        <Footer />
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
