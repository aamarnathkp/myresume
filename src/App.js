
import './App.css';

// import Background from './components/Background/Circle/Background';
// import Bubble from './components/Background/Bubble/Bubble';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';

function App() {
  
  return (
    <Router >
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignInPage} />
      </Switch>
    </Router>
  );
}

export default App;
