import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/home/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
