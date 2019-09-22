import React, { Component } from 'react';
// import { Tween, Timeline } from 'react-gsap';

class HomepageHeader extends Component {

    // componentDidMount(){

    // }
    render() {
        return (
            <div className="row jumbo-head">
                <div className=" col-12 vh-100" >
                    <div className="container position-relative vh-100">
                        <div className="text-align-left position-absolute header-text-container">
                            <div className="header-thin primary-dark-color">Hello. My name is ...</div>
                            <h1 className="header-medium primary-color-light">Simone Anthony</h1>
                            <div className="header-medium primary-dark-color">Full Stack Web Developer.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomepageHeader;