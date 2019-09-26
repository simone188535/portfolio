import { TweenLite } from "gsap/TweenMax";

const heroLeftAnimation = () => {
    TweenLite.to('#jumbo-head-container', 2, { y: 50, opacity: 1 });
}
export { heroLeftAnimation };