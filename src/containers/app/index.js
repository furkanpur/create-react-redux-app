import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from '../home';
import Github from '../github';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <header>
                        <Link to="/">Home</Link>
                        <Link to="/github">Github</Link>
                    </header>
                </div>

                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/github" component={Github} />
                </div>
            </div>
        );
    }
}

export default App;
