import React from 'react';
import TemplateComp from '../components/TeacherTemplate';
import FeedbackBox from '../components/FeedbackBox';


const TeacherTempPage: React.FC = () => {
    return (
        <>
        <br />
        <h1 style={{marginLeft: "1%"}} className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-black">Generate Assignment Template</h1>
        <br />
            <TemplateComp />
            <br />
            <h2 style={{marginLeft: '1%'}} className="text-2xl font-semibold mb-4">Templates</h2>
            <FeedbackBox />
        </>
    );
    }

    export default TeacherTempPage;