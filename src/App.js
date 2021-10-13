import {
  Home
}from './pages/index'

import './assets/styles/main.scss'

import Sidebar from './containers/Sidebar/Sidebar';

import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
