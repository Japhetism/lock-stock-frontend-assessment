import React, { useState } from 'react';

const Tab = (props: any) => {
    
    const [isChecked, setIsChecked] = useState(true);

    return <React.Fragment>
        <div className="container">
            <div className="tabs tab-effect">
                <input type="radio" id="tab-1" name="tab-effect" checked={isChecked} onChange={() => setIsChecked(true)} />
                <span>{props.tab1Title}</span>
                <input type="radio" id="tab-2" name="tab-effect" />
                <span>{props.tab2Title}</span>
                <div className="line ease"></div>
                <div className="tab-content">
                    <hr className="divider" />
                    <section id="tab-item-1">
                        {props.university}
                    </section>
                    <section id="tab-item-2">
                        {/* <h1>Courses</h1> */}
                    </section>
                </div>
		    </div>
        </div>
    </React.Fragment>
}

export default Tab;