import React, { useEffect } from 'react';
import _ from 'lodash';
import $ from 'jquery';
import { isInViewport } from '../js/isInViewport';
import { TweenMax } from "gsap/TweenMax";
import { Link } from 'react-router-dom';
import clientsArray from '../js/props-objects/client-props';

const CardContainerComponent = (props) => {
    let { ident } = props;
    const makeCard = (arrayValue) => {

        const results = _.map(arrayValue, (arrayIndex) => {
            return (

              
                    <div key={arrayIndex.id} className="col-6 col-md-3">
                      <Link to={arrayIndex.link}>
                        <img className=" img-fluid" src={arrayIndex.img} alt={arrayIndex.alt} />
                        {/* <div className="card-body">
                            <p className="card-text text-center">{arrayIndex.description}</p>
                        </div> */}
                        </Link>
                    </div>
                
            )
        }

        );
        return results;
    }
    // const staggerCards = (ident) => {

    //     // const tl = new TimelineLite();

    //     //only activates in Viewpoint when parent Id (ident) is correct.
    //     //It uses css selector syntax to determine which card section  should be selected

    //     if (isInViewport($(ident))) {
    //         // console.log(ident);
    //         // return tl.staggerTo(".all-cards" + ident + " > .card", 2, { y: 30, opacity: 1 }, 0.25);
    //         return TweenMax.staggerTo(ident + ".all-cards  .card", 2, { y: 15, opacity: 1 }, 0.3);
    //     }
    // };

    // const theAnimation = () => {
    //     let identRef = '#'+ident;
    //     staggerCards(identRef);
    // }

    // useEffect(() => {
    //     theAnimation();
    //     window.addEventListener('scroll', theAnimation);
    
    // });
    return (
        <div id={props.ident} className="all-cards">
            <div className="container">
                <div className="row ">
                    {makeCard(clientsArray.clients)}
                </div>
            </div>

        </div>);
}
export default CardContainerComponent;