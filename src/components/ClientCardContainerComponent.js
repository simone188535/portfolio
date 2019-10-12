import React from 'react';
import _ from 'lodash';

import clientsArray from '../js/props-objects/client-props';

const CardContainerComponent = (props) => {
    // let { ident } = props;
    const makeCard = (arrayValue) => {

        const results = _.map(arrayValue, (arrayIndex) => {
            return (


                <div key={arrayIndex.id} className="col-6 col-md-3">
                    <a href={arrayIndex.link} target="_blank" rel="noopener noreferrer">
                        <div className="client-card">
                            <img className=" img-fluid" src={arrayIndex.img} alt={arrayIndex.alt} />
                        </div>

                    </a>
                </div>

            )
        }

        );
        return results;
    }

    return (
        <div id={props.ident} className="all-cards">
            <div className="container client-card-container">
                <div className="row ">
                    {makeCard(clientsArray.clients)}
                </div>
            </div>

        </div>);
}
export default CardContainerComponent;