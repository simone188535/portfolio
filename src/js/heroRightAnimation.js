import { TimelineLite, Circ } from "gsap/TweenMax";

//this external function controls the trigger for the beginning of scroll animation

const heroRightAnimation = () => {
    //for Later: use timeLine tool (greensock) to start an svg "orbit animation" after these action are completed. reference: https://codepen.io/guerreiro/pen/obhzc
    const tl = new TimelineLite();
    // tl.from();
    //incase I forget later, "together" (can be replaced with any word) allows tl's to run at the same time. this "-=(number)" allows animations to overlap. reference: https://www.youtube.com/watch?v=sXJKg8SUSLI&t=85s
    // 7 minute mark
    tl.to('#circle-to-bg', 1, {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 1,
        ease: Circ.easeOut
    });
    tl.to('#circle-to-bg', 1, {
        borderRadius: 0
    }, "together-=.25");
    tl.to('.all-boxes', 1, {
        opacity: .9
    }, "together-=.4");
     }
    
    export { heroRightAnimation };