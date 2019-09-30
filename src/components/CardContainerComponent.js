import React from 'react';
import _ from 'lodash';
import skillsArray from '../js/props-objects/skills-props';

const CardContainerComponent = (props) => {

    // console.log(skills);

    // const testing = () =>{
    //     return <div> hello</div>
    // }
    const rowGiver = () => {
        
    }
    const makeCard = (arrayValue) => {
        console.log(arrayValue)
        return _.map(arrayValue, (arrayIndex) => {
            return (
                <div key={arrayIndex} className="card col-md-3">
                <img className="card-img-top img-fluid" src={arrayIndex.img} alt={arrayIndex.alt} />
                <div className="card-body">
                    <p className="card-text">{arrayIndex.description}</p>
                </div>
            </div>
            )
        })
        // console.log(arrayValue.skills);
        /*
        const rows = [];

        for (let i = 0; i < arrayValue.skills.length; i++) {
            // console.log(arrayValue.skills[i]);
            let arrayIndex = arrayValue.skills[i];
            // if((i=0) || (i%4==0)){
                
            // }
            rows.push(
                <div key={i} className="card col-md-3">
                    <img className="card-img-top img-fluid" src={arrayIndex.img} alt={arrayIndex.alt} />
                    <div className="card-body">
                        <p className="card-text">{arrayIndex.description}</p>
                    </div>
                </div>

            );

        }
        return rows;
        */
    }
    return (
        <div id={props.ident} className="all-cards">
            <div className="row ">
                {/* <div className="all-cards">
            <div id={props.ident} className="row "> */}
                { makeCard(skillsArray.skills) }
                {/* {testing()} */}
            </div> 

        </div>);
}
export default CardContainerComponent;