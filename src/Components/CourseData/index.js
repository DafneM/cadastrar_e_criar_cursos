import moment from 'moment';
import React from 'react';
// import SubmitButton from '../SubmitButton';
import { Container, NameDiv, InitDateDiv, EndDateDiv, DescriptionDiv, DurationDiv } from './Style';

const CourseData = (
    course,
) => {
    const formatDate = (state) => {
        if(state===1){
        let date = new Date(course.initialDate)
        let formatDate = moment(date).format('DD/MM/YYYY');
        return <InitDateDiv>{formatDate}</InitDateDiv>
        }
        else{
        let dateEnd = new Date(course.endDate)
        let formatEndDate = moment(dateEnd).format('DD/MM/YYYY');
        return <InitDateDiv>{formatEndDate}</InitDateDiv>
        }
    }

    return(
        <Container>
            <NameDiv>{course.name}</NameDiv>
            {formatDate(1)}
            {formatDate(0)}
            {/* <InitDateDiv>{course.initialDate}</InitDateDiv> */}
            {/* <EndDateDiv>{course.endDate}</EndDateDiv> */}
            {/* <DescriptionDiv>{course.description}</DescriptionDiv> */}
            <DurationDiv>{course.duration}</DurationDiv>
        </Container>
    );
}

export default CourseData;
