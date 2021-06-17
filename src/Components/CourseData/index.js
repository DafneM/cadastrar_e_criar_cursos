import React from 'react';
// import SubmitButton from '../SubmitButton';

const CourseData = (
    course,
    name
) => {
    return(
        <div>
            <h1 style={{backgroundColor: 'blue', width:'50%', height: '20%'}}>{course.name}</h1>
        </div>
    );
}

export default CourseData;
