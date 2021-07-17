import React, {useEffect, useState} from 'react';
import Card from '../../components/card';
import { arrayChunk } from '../../utils/helper';

const CourseView = (props: any) => {
    
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const courses = props?.courses?.courseData?.courseList?.responseData;
        setCourses(courses)
    }, [props])


    console.log(courses)

    return <React.Fragment>
        {courses && arrayChunk(courses, 3).map((coursesRow: any, index: any) => (
            <div className="row" key={Math.random()}>
                {coursesRow.map((course: any, index: any) => (
                    <div className="column" key={Math.random()}>
                        <Card 
                            key={Math.random()}
                            data={course}
                            type="course"
                        />
                    </div>
                ))}
            </div>
        ))}
    </React.Fragment>
}

export default CourseView;