import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GlobalNav extends Component {

    constructor() {
        super();
        this.state = {
            navBackground: 'nav-background-light'
        }
    }
     componentDidMount(){
        window.addEventListener('scroll', this.toggleBackgroundColor);
    }

    //this returns a class of either nav-background-light or nav-background-dark. Both of which contain nav stylings for the background color and text color 
    toggleBackgroundColor = () => {
        
        let navBackgroundVal = '';

        if(window.scrollY<100){
            navBackgroundVal = 'nav-background-light';
        }else{
            navBackgroundVal = 'nav-background-dark';
        }
         this.setState({
            navBackground: navBackgroundVal
        });
    }


    render() {
        return (
            <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${this.state.navBackground}`} 
            // onClick={this.toggleBackgroundColor}
            >
                <div className="container">
                    {/* <Link className="navbar-brand" to="/"> */}
                        {/* <img src="http://placehold.it/150x50?text=Logo" alt=""> */}
                        {/* <div>Logo</div>
                    </Link> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default GlobalNav;