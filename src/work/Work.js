import React, { useEffect } from 'react';
import { TweenMax,TimelineLite } from "gsap/TweenMax";
import $ from 'jquery';
import { isInViewport } from '../js/isInViewport';
import SubHeadComponent from '../components/SubHeadComponent';


const Work = () => {

    const heroAnimation = (heroIdent) =>{
       
        if (isInViewport($(heroIdent))) {
            const tl = new TimelineLite();
            tl.to($('#work-hero-text'), 1, { 
                opacity: 1,
                y:-20 
            })
            .to($('#scaling-period'),.5,{
                opacity:1
            });
        }
    }

    const allAnimation = () => {
        heroAnimation('#hero-content');
    }
   
    const workTrigger = {
        ident: 'workTrigger',
        text: 'Previous Clients'

    };
    useEffect(() => {
        allAnimation();
        window.addEventListener('scroll', allAnimation);
        // console.log('active');

    });

    return (
        <div className="work">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-12 bg-red-orange">
                        <div className="hero-section w-100">
                            <div className="h-100" id="hero-content">
                                <div className="hero-text position-relative h-100">
                                    <div className="hero-text-container position-relative">
                                    <div  id="work-hero-text">Work <span id="scaling-period" className="position-relative">.</span></div>
                                     {/* <div id="work-hero-text" className="float-left">Work</div> */}
                                   {/* <div id="scaling-period" className="float-left"></div> */}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <SubHeadComponent {...workTrigger} />
                {/* <ClientCardContainerComponent ident="first-card-container" /> */}
                <div className="row">

                </div>
            </div>
        </div>
    );
}

export default Work;