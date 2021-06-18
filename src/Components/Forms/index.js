import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Alert, UncontrolledAlert } from 'reactstrap';
import { TitleCreate } from './Style';

const Forms = () => {
    const [courseName, setCourseName] = useState('');
    const [initialDate, setInitialDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');
    let courseArray = [];
    let count = 1;
    const [visibleBad, setVisibleBad] = useState(false);
    const [visibleOK, setVisibleOK] = useState(false);

    const storeData = () => {
        if(courseName && initialDate && endDate && duration && description){
            if(courseName[0] === ' ' || initialDate[0] === ' ' || endDate[0] === ' ' || duration[0] === ' ' || description[0] === ' '){
              setVisibleBad(true);
              setTimeout(() => {
                setVisibleBad(false)
              }, 5000);
            }
            else if(typeof(Storage) !== 'undefined'){
                (localStorage.i) ? localStorage.i = Number(localStorage.i)+1 : localStorage.i=1;
                var course = {courseName: `${courseName}` , initialDate: `${initialDate}` , endDate: `${endDate}`, duration: `${duration}`, description: `${description}`};
                courseArray[++count] = course;
                localStorage?.setItem('@cadastrar_e_criar_cursos/course' + localStorage.i, JSON.stringify(course)); 
                setVisibleOK(true);
                setTimeout(() => {
                  setVisibleOK(false)
                }, 5000);
            }
        }
        else{
           setVisibleBad(true);
           setTimeout(() => {
            setVisibleBad(false)
          }, 5000);
        }
    }

    return(
        <Container fluid="md">
        {/* <Circle/>
        <GreenCircle/>
        <CircleBottom/>
        <CirclePink/> */}
        <TitleCreate>Cadastro de Cursos</TitleCreate>
        <Form style={{width:"90%", margin: "0 auto", paddingTop: "20vh"}}>
        <FormGroup>
          <Label style={{marginBottom: "1.5vh"}}  for="course-name">Nome</Label>
          <br/>
          <Input style={{marginBottom: "1.5vh"}} type="text" name="Name" value={courseName} id="Name"
            placeholder="Nome"
            minlength="3" maxlength="200" required pattern=".*[^ ].*"
            oninvalid="this.setCustomValidity('')"
            onChange={(e) => setCourseName(e?.target?.value)}/>
        </FormGroup>
        <FormGroup>
          <Label style={{marginBottom: "1.5vh"}} for="initial-date">Data de Início</Label>
          <Input style={{marginBottom: "1.5vh"}} type="date" value={initialDate} id="InitDate" name="InitDate"
            min="1900-01-01" required
            oninvalid="this.setCustomValidity('Por favor, selecione uma data de início')"
            onChange={(e) => setInitialDate(e?.target?.value)}/>
        </FormGroup>
        <FormGroup>
          <Label style={{marginBottom: "1.5vh"}} for="end-date">Data de Fim</Label>
          <Input style={{marginBottom: "1.5vh"}} type="date" value={endDate} id="EndDate" name="EndDate"
            min="1900-01-01" required
            oninvalid="this.setCustomValidity('Por favor selecione uma data de fim')"
            onChange={(e) => setEndDate(e?.target?.value)}/>
        </FormGroup>
        <FormGroup>
          <Label style={{marginBottom: "1.5vh"}} for="duration">Duração</Label>
          <Input style={{marginBottom: "1.5vh"}} type="text" value={duration} name="Duration" id="Duration"
            placeholder="Duração"
            maxlength="4" required pattern=".*[^ ].*"
            oninvalid="this.setCustomValidit('')"
            onChange={(e) => setDuration(e?.target?.value)}/>
        </FormGroup>
        <FormGroup>
          <Label style={{marginBottom: "1.5vh"}} for="description">Descrição</Label>
          <Input type="textarea" name="Description" value={description}
            placeholder="Descrição"
            class="form-control" required pattern=".*[^ ].*"
            onChange={(e) => setDescription(e?.target?.value)}
            />
        </FormGroup>
        <br/>
        <br/>
      <Button style={{backgroundColor: "#e7008a", border: "none", width: "120px"}} onClick={() => { storeData(); }}>Cadastrar</Button>
        <br/>
        <br/>
      <Alert color="danger" isOpen={visibleBad}>Por favor, preencha todos os campos corretamente!</Alert>
      <Alert color="success" isOpen={visibleOK}>Curso cadastrado com sucesso!</Alert>
      </Form>
      </Container>
    );
}

export default Forms;
