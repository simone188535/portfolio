import { TimelineLite } from "gsap/TweenMax";
import $ from 'jquery';

const aboutMeSectionAnimation = () => {
    const tl = new TimelineLite();


    return tl.to($('#about-me-left'), .5, {
        opacity: 1,
        x: 30
    }, "sameTime")
        .to($('#about-me-right'), .5, {
            opacity: 1,
            x: -30
        }, "sameTime");
}
export default aboutMeSectionAnimation;