import React from 'react';
import _ from 'lodash';
import skillsArrayOne from '../js/props-objects/skills-props-pt-1';

const CardContainerComponent = (props) => {

    // console.log(skills);

    // const testing = () =>{
    //     return <div> hello</div>
    // }
    const makeCard = (arrayValue) => {
        
        const results = _.map(arrayValue, (arrayIndex) => {
            return (
            //    console.log(arrayIndex);
                <div  key={arrayIndex.id} className="card col-6 col-md-3">
                <img className="card-img-top img-fluid" src={arrayIndex.img} alt={arrayIndex.alt} />
                <div className="card-body">
                    <p className="card-text text-center">{arrayIndex.description}</p>
                </div>
            </div>
            )
        }
        
        );
        return results;
    }
    return (
        <div id={props.ident} className="all-cards">
            <div className="container">
            <div className="row ">
                { makeCard(skillsArrayOne.skills) }
            </div> 
            </div>

        </div>);
}
export default CardContainerComponent;