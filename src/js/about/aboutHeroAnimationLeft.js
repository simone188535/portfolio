import { TimelineLite } from "gsap/TweenMax";
import $ from 'jquery';

const aboutHeroAnimationLeft = () =>{
    const tl = new TimelineLite();
   

        return tl.to($('#hero-text-left'), 1.5, {
            opacity: 1
        });

    
    // if (isInViewport($(heroIdent2))) {
    //     tl.to($('#top-to-bottom'), .5, {
    //         height: "100%"

    //     }, "-=1")
    //         .to($('#hero-text-right'), .5, {
    //             opacity: 1,
    //             y:-10
    //         });
    // }
}
export default aboutHeroAnimationLeft;