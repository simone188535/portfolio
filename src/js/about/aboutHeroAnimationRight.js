import { TimelineLite } from "gsap/TweenMax";
import $ from 'jquery';

const aboutHeroAnimationRight = () =>{
    const tl = new TimelineLite();
   
       return tl.to($('#top-to-bottom'), .5, {
            height: "100%"

        }, "-=1")
            .to($('#hero-text-right'), .5, {
                opacity: 1,
                y:-10
            });
    
}
export default aboutHeroAnimationRight;