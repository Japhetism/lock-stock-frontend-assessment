import React from 'react';

const Card = (props: any) => {

    return <React.Fragment>
       <div className="card">
            <div className="card-banner">
                <div className="bottom-left"></div>
                </div>
            <div className="card-container">
                {props.type == 'university' && <div className="university-container">
                    <p className="university-title">{props?.data.university_name}</p>
                    <p className="university-country">{props?.data.country_name}</p>
                </div>}
                {props.type == 'course' && <div className="university-course-container">
                    <p className="course-title">{props?.data.course_name}</p>
                    <p className="course-university">{props?.data.university_name}</p>
                    <p className="course-country">{props?.data.country_name}</p>
                </div>}
                <div className="tuition-course-details">
                    <div className="scholarships-container">
                        <div className="scholarship-details">
                            <p>USD 400 Fee Waiver on Postgraduate</p>
                            <p>Courses</p>
                        </div>
                    </div>
                    <div className="tuition-container">
                        <span id="tuition-name">Est. Tuition</span>
                        <span id="tuition-cost">{props?.data.currency} {props?.data.estimated_tuition || props?.data.annual_tuition} / Year</span>
                    </div>
                    <hr/>
                    {props.type == 'university' && <div className="course-container">
                        <span id="course-name">No. of courses</span>
                        <span id="course-duration">{props?.data.number_of_courses}</span>
                    </div>}
                    {props.type == 'course' && <div className="course-container">
                        <span id="course-name">Course Duration</span>
                        <span id="course-duration">{`<1 Year`}</span>
                    </div>}
                </div>
                <div id="button-container">
                    <button className="button gray-button" id="button1" >Learn More</button>
                    <button className="button blue-button" id="button2">Apply Now</button>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Card;