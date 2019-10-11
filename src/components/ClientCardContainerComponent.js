import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import clientsArray from '../js/props-objects/client-props';

const CardContainerComponent = (props) => {

    const makeCard = (arrayValue) => {

        const results = _.map(arrayValue, (arrayIndex) => {
            return (

                <Link to={arrayIndex.link}>
                    <div key={arrayIndex.id} className="card col-6 col-md-4">
                        <img className="card-img-top img-fluid" src={arrayIndex.img} alt={arrayIndex.alt} />
                        {/* <div className="card-body">
                            <p className="card-text text-center">{arrayIndex.description}</p>
                        </div> */}
                    </div>
                </Link>
            )
        }

        );
        return results;
    }
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