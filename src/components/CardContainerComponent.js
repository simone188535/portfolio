import React from 'react';
import skills from '../js/props-objects/skills-props';

const CardContainerComponent = (props) => {
    
    console.log(skills);
    
    return (<div id={props.ident} className="row">
        
        {/* <div className="all-cards"> */}
            <div className="card col-md-4" >
                <img className="card-img-top" src="#" alt="istest" />
                <div className="card-body">
                    <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                </div>
            </div>
            <div className="card col-md-4" >
                <img className="card-img-top" src="#" alt="istest" />
                <div className="card-body">
                    <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                </div>
            </div>
            <div className="card col-md-4" >
                <img className="card-img-top" src="#" alt="istest" />
                <div className="card-body">
                    <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                </div>
            </div>

        {/* </div> */}
    </div>);
}
export default CardContainerComponent;