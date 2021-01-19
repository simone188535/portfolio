import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import GlobalNav from './GlobalNav';
import GlobalFooter from './Footer';


import './scss/App.scss';

const App = () => {
    return (
        <div className="full-page">
            <BrowserRouter>
            <GlobalNav />
                <div>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/work" component={Work} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
                <GlobalFooter/>
            </BrowserRouter>
        </div>

    );
}

export default App;