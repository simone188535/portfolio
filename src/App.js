import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Projects from './projects/Projects';
import About from './about/About';
import Contact from './contact/Contact';
import GlobalNav from './GlobalNav';
import GlobalFooter from './GlobalFooter';

import './scss/App.scss';

const App = () => {
    return (
        <div className="page-bg-color full-page">
            <BrowserRouter>
            <GlobalNav />
                <div>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
                <GlobalFooter/>
            </BrowserRouter>
        </div>

    );
}

export default App;