import React, { useState, useEffect } from 'react';
import CourseData from '../../Components/CourseData';

const ListCourses = () => {
    const [word, setWord] = useState();
    var arrayCourses = [];
    const [filterCourses, setFilterCourses] = useState(arrayCourses)

    const getCourses = async () => {
      let count = 1;
        for(var i = 0; i<localStorage.i; i++){
            arrayCourses[count] =  JSON.parse(localStorage.getItem('@cadastrar_e_criar_cursos/course' + count));
            count++;
        }
    };

    useEffect(() => {
        setFilterCourses(
          arrayCourses.filter((course) => course?.courseName?.toLowerCase().includes(word?.toLowerCase()))
        );
      }, [word]);

    const listCourses = () => {
      getCourses();
      if (arrayCourses?.length === 0) {
        return <h1>Sem resultados</h1>;
      }
      if (filterCourses?.length === 0) {
        setFilterCourses(arrayCourses);
      }
      if(filterCourses?.length === 0 && arrayCourses?.length === 0){
        return <h1>Sem resultados</h1>;
      }
      return filterCourses?.map((elem) => (<CourseData 
          course={elem}
          name={elem.courseName}
      />));
      };
    
    return(
        <div>
            <input type="text" placeholder="Pesquisar..." onChange={(word) => setWord(word.target.value)}></input> 
            <div>
              {listCourses()}
            </div>
        </div>
    );
}

export default ListCourses;
