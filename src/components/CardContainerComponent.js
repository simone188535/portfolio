import React from 'react';
import skillsArray from '../js/props-objects/skills-props';

const CardContainerComponent = (props) => {

    // console.log(skills);

// const testing = () =>{
//     return <div> hello</div>
// }
const makeCard = (arrayValue) =>{
    // console.log(arrayValue.skills);
    const rows = [];

    for(let i = 0; i < arrayValue.skills.length; i++){
        // console.log(arrayValue.skills[i]);
        let arrayIndex = arrayValue.skills[i];
        
        rows.push(
        // if(){

        // }
        <div key={i} className="card col-md-4">
            <img className="card-img-top img-fluid" src={arrayIndex.img} alt={arrayIndex.alt} />
                    <div className="card-body">
                        <p className="card-text">{arrayIndex.description}</p>
                    </div>
        </div>);
       
      }
      return rows;
}
    return (
        <div className="all-cards">
            <div id={props.ident} className="row ">
                {/* {makeCard(skillsArray)} */}
                {/* {testing()} */}
                 <div className="card col-md-4" >
                    <img className="card-img-top" src="https://dgpr.s3.amazonaws.com/images/camera-icon-png-18.jpg" alt="istest" />
                    <div className="card-body">
                        <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                    </div>
                </div>
                <div className="card col-md-4" >
                    <img className="card-img-top" src="https://dgpr.s3.amazonaws.com/images/camera-icon-png-18.jpg" alt="istest" />
                    <div className="card-body">
                        <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                    </div>
                </div>
                <div className="card col-md-4" >
                    <img className="card-img-top" src="https://dgpr.s3.amazonaws.com/images/camera-icon-png-18.jpg" alt="istest" />
                    <div className="card-body">
                        <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                    </div>
                </div> 
                

            </div>
        </div>);
}
export default CardContainerComponent;