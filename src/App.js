import './App.css';
import Nav from './Components/Navbar/Nav'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Projects from './Components/Projects/Projects';
import News from './Components/News/News';
import Social from './Components/Social/Social';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
    
    <div className='App'>
         <Nav />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/About'>
          <About />
        </Route>

        <Route path='/Contact'>
          <Contact />
        </Route>

        <Route path='/Services'>
          <Services />
        </Route>

        <Route path='/Projects'>
          <Projects />
        </Route>

        <Route path='/News'>
          <News />
        </Route>

        <Route path='/Social'>
          <Social />
        </Route>

        <Route path='/Profile'>
          <Profile />
        </Route>
      
      </Switch>

      <Footer />
      
    </div>
    
    </Router>
  );
}


export default App;
