import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomepageHeader from './HomepageHeader';
import Projects from './projects/Projects';
import About from './about/About';
import Contact from './contact/Contact';
import './scss/App.scss';


const Home = () => {
    return (
        <div className="container-fluid page-bg-color">
            <HomepageHeader />
        </div>
    );
}
const projects = () => {
    return (
        <div className="container-fluid page-bg-color">
            <Projects/>
        </div>
    );
}
const about = () => {
    return (
        <div className="container-fluid page-bg-color">
           <About/>
        </div>
    );
}
const contact = () => {
    return (
        <div className="container-fluid page-bg-color">
            <Contact/>
        </div>
    );
}
const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={projects} />
            <Route path="/about" component={about} />
            <Route path="/contact" component={contact} />
        </BrowserRouter>

    );
}

export default App;