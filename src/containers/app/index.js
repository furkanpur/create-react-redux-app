import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from '../home';
import GithubBio from '../github';

const App = () =>
    <div>
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/github-bio">Github Bio</Link>
            </header>
        </div>

        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/github-bio" component={GithubBio} />
        </div>
    </div>;

export default App;
