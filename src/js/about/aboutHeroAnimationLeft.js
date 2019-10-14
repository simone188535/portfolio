import { TimelineLite } from "gsap/TweenMax";
import $ from 'jquery';

const aboutHeroAnimationLeft = () =>{
    const tl = new TimelineLite();
   

        return tl.to($('#hero-text-left'), 1.5, {
            opacity: 1
        });

}
export default aboutHeroAnimationLeft;