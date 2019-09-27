import React from 'react';

const SubHeadComponent = (props) => {
    return (<div>
        <h2 id={props.ident} className="text-center sub-section-header">
            {props.text}
        </h2>
    </div>);
}
export default SubHeadComponent;