import React, { useEffect } from 'react';
import $ from 'jquery';
import { isInViewport } from '../js/isInViewport';
import { TweenMax } from "gsap/TweenMax";

//this component controls the subhead component and animation
const SubHeadComponent = (props) => {

    let { ident, text } = props;

    
    //this works by taking the user inputted id/ident (which should look similar to #trigger1'), checks to see if it is in the view point, and activates an animation if it is.
    const subSectionHeadAnimation = (ident) => {

        if (isInViewport($(ident))) {

            return TweenMax.to($(ident), 1.8, { y: 20, opacity: 1 });
            // console.log('is active');

        }
    };

    const theAnimation = () => {
        let identRef = '#'+ident;
        subSectionHeadAnimation(identRef);
    }

    useEffect(() => {
        theAnimation();
        window.addEventListener('scroll', theAnimation);
    
    });

    return (
        <div className="row">
            <div className="col-12">
                <h2 id={ident} className="text-center sub-section-header">
                    {text}
                </h2>
            </div>
        </div>);
}

export default SubHeadComponent;