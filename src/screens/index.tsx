import React from 'react';
import Tab from '../components/tab';
import UniversityContainer from './university';
//import Univer

const Home = () => {
    return <Tab
        tab1Title="University"
        tab2Title="Course" 
        university={<UniversityContainer />}
    />
}

export default Home;