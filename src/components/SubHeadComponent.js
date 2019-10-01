import React from 'react';

const SubHeadComponent = (props) => {

    // const { sectionNum, ident, text } = props;
    const { ident, text } = props;
    return (
        // <div className={`row ${sectionNum}`}>
        <div className="row">
            <div className="col-12">
                <h2 id={ident} className="text-center sub-section-header">
                    {text}
                </h2>
            </div>
        </div>);
}

export default SubHeadComponent;