import React, {Component} from 'react';
import { 
    BrowserRouter as Router, 
    Switch,
    Route,  
    NavLink, 
    Redirect, 
 } from 'react-router-dom';
 import Home from './Home';
 import About from './About';
 import Contact from './Contact';

class Navbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="navbar">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact" className="right">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                        </Switch>
                    </div>
                </div>
            </Router>
            
        );
    }
}
export default Navbar;