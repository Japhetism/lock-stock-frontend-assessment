import React from 'react';
import Tab from '../components/tab';
import UniversityContainer from './university';
import CourseContainer from './course';

const Home = () => {
    return <Tab
        tab1Title="University"
        tab2Title="Course" 
        universities={<UniversityContainer />}
        courses={<CourseContainer />}
    />
}

export default Home;