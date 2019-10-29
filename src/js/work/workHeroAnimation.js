import { TimelineLite } from "gsap/TweenMax";
import $ from 'jquery';

const workHeroAnimation = () => {
    const tl = new TimelineLite();
            tl.to($('#work-hero-text'), 1, {
                opacity: 1,
                y: -20
            });
                // .to($('#scaling-period'), .5, {
                //     opacity: 1
                // });
}
export { workHeroAnimation };