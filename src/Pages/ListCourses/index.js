import React, { useState, useEffect } from 'react';
import CourseData from '../../Components/CourseData';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { ListContainer, NameDiv, InitDateDiv, EndDateDiv, DurationDiv, TitleList, Header, FirstSpan, SecondSpan, ThirdSpan, FourthSpan } from './Style';

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
        console.log(arrayCourses);
    };

    useEffect(() => {
        setFilterCourses(
          arrayCourses.filter((course) => course?.courseName?.toLowerCase().includes(word?.toLowerCase()))
        );
      }, [word]);

    const listCourses = () => {
      getCourses();
      if (arrayCourses?.length === 0) {
        return <div>
          <FirstSpan></FirstSpan>
          <SecondSpan></SecondSpan>
          <ThirdSpan></ThirdSpan>
          <FourthSpan></FourthSpan>
        </div>;
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
          initialDate={elem.initialDate}
          endDate={elem.endDate}
          duration={elem.duration}
          description={elem.description}
      />));
      };
    
    return(
        <div>
          <TitleList>Lista de Cursos</TitleList>
          <InputGroup style={{width: "30vw",  marginLeft: "60%", marginBottom: "40px", marginTop: "40px"}} size="sm" color="light">
              <Input type="text" placeholder="Pesquisar..." onChange={(word) => setWord(word.target.value)}/>
          </InputGroup>
            <ListContainer>
              <Header>
                <NameDiv>Nome do curso</NameDiv>
                <InitDateDiv>Data de início</InitDateDiv>
                <EndDateDiv>Data de término</EndDateDiv>
                <DurationDiv>Duração (em semanas)</DurationDiv>
              </Header>
              {listCourses()}
            </ListContainer>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default ListCourses;
