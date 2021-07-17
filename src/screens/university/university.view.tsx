import React from 'react';
import Card from '../../components/card';

const UniversityView = () => {
    return <React.Fragment>
        <div className="row">
            <div className="column">
                <Card />
            </div>
            <div className="column">
                <Card />
            </div>
            <div className="column">
                <Card />
            </div>
        </div>
        <div className="row">
            <div className="column">
                <Card />
            </div>
            <div className="column">
                <Card />
            </div>
            <div className="column">
                <Card />
            </div>
        </div>
    </React.Fragment>
}

export default UniversityView;