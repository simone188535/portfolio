import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


class GlobalNav extends Component {

    constructor() {
        super();
        this.state = {
            navBackground: 'nav-background-light'
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.toggleBackgroundColor);
    }

    //this returns a class of either nav-background-light or nav-background-dark. Both of which contain nav stylings for the background color and text color 
    toggleBackgroundColor = () => {

        let navBackgroundVal = '';

        if (window.scrollY < 100) {
            navBackgroundVal = 'nav-background-light';
        } else {
            navBackgroundVal = 'nav-background-dark';
        }
        this.setState({
            navBackground: navBackgroundVal
        });
    }


    render() {
        return (
            <Nav className={`navbar navbar-expand-lg navbar-light fixed-top ${this.state.navBackground}`}
            // onClick={this.toggleBackgroundColor}
            >
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/work">Work</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
            </Nav>
        );
    }
}

export default GlobalNav;