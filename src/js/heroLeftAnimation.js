import { TweenMax } from "gsap/TweenMax";

const heroLeftAnimation = () => {
    TweenMax.to('#jumbo-head-container', 2, { y: 50, opacity: 1 });
}
export { heroLeftAnimation };