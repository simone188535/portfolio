import $ from 'jquery';
import { isInViewport } from './isInViewport';
// import { 
//     // TweenLite, 
//     TimelineLite, 
//     // Circ 
// } from "gsap/TweenMax";

//Please pass jquery ID to use

//let passArgsToCheckViewPoint = $.fn.passArgsToCheckViewPoint = (ident, args) => {
 let passArgsToCheckViewPoint =  (ident, args) => {
            
    if (isInViewport($(ident))) {

        // var $this = $(this);
        // console.log('trigger found');
        // console.log(this);
        console.log(args);
        return args;
        
    }else{
        // console.log('somethings wrong in passArgsToCheckViewPoint');
    }
}
    

export { passArgsToCheckViewPoint };