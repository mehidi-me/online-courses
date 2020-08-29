import React, { useEffect, useState } from 'react';
import Courses from './Courses';

const GetCourses = (props) => {

    const [course, setCourse] = useState([])

    useEffect(() => {

        fetch('https://api.jsonbin.io/b/5f491c55993a2e110d386425/2')
        .then((res) => res.json())
        .then((data) => setCourse(data))

    },[])
    
    return (
        <div className="row row-cols-1 row-cols-md-3">
            {
                course ? course.map((cour) => <Courses addToCardEvent={props.addToCardEvent} courses={cour} key={Number(cour.id)}/>) : 'Loading...'
            }
        </div>
    );
};

export default GetCourses;