import React, { useState } from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import CourseData from '../../Components/CourseData';

const ListCourses = () => {
    const [filterCourses, setFilterCourses] = useState([]);
    const [word, setWord] = useState();
    var arrayCourses = [];

    const getCourses = async () => {
      let count = 1;
        for(var i = 0; i<localStorage.i; i++){
            arrayCourses[count] =  JSON.parse(localStorage.getItem('@cadastrar_e_criar_cursos/course' + count));
            count++;
        }
    };

    // useEffect(() => {
    //     setFilterCourses(
    //       arrayCourses.filter((course) => course?.courseName?.toLowerCase().includes(word?.toLowerCase())),
    //     );
    //   }, [word]);
    
    //   useEffect(() => {
    //     setFilterCourses(arrayCourses);
    //   }, [arrayCourses]);
    
    const listCourses = () => {
      getCourses();
      if (arrayCourses?.length === 0) {
        return <h1>Sem resultados</h1>;
      }
        // if (filterCourses?.length === 0) {
        //   return <h1>Sem resultados</h1>;
        // }
      return arrayCourses?.map((course) => (<CourseData 
          course={course}
      />));
      };
    
    return(
        <div>
            <input
              type="text"
              value={word}
              setWord={(value) => setWord(value)}
            />
            <div>
              {listCourses()}
            </div>
        </div>
    );
}

export default ListCourses;
