// import React, { Component } from 'react';
// import { TweenLite,  TimelineLite, Circ } from "gsap/TweenMax";

//this external function controls the trigger for the beginning of scroll animation

const scrollTrigger = () => {
    if(window.scrollY<300){
        console.log('function is indeed working');
    }
}

export { scrollTrigger };