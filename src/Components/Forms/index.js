import React, {useState} from 'react';
// import SubmitButton from '../SubmitButton';

const Forms = () => {
    const [courseName, setCourseName] = useState('');
    const [initialDate, setInitialDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');

    return(
        <div>
            <div>
            <label for="Nome do curso">Nome</label>
            <input type="text" name="Name" value={courseName} id="Name"
            placeholder="Nome"
            minlength="3" maxlength="200" required pattern=".*[^ ].*"
            oninvalid="this.setCustomValidity('')"
            onChange={(e) => setCourseName(e?.target?.value)}
            ></input>

            <label for="Date">Data de início</label>
            <input type="date" value={initialDate} id="InitDate" name="InitDate"
            min="1900-01-01" required
            oninvalid="this.setCustomValidity('Por favor, selecione uma data de início')"
            onChange={(e) => setInitialDate(e?.target?.value)}></input>
 
            <label for="Date">Data de fim</label>
            <input type="date" value={endDate} id="EndDate" name="EndDate"
            min="1900-01-01" required
            oninvalid="this.setCustomValidity('Por favor selecione uma data de fim')"
            onChange={(e) => setEndDate(e?.target?.value)}></input>

            <label for="Duration">Duração</label>
            <input type="text" value={duration} name="Duration" id="Duration"
            placeholder="Duração"
            minlength="3" maxlength="4" required pattern=".*[^ ].*"
            oninvalid="this.setCustomValidit('')"
            onChange={(e) => setDuration(e?.target?.value)}></input>

            <label for="Descrição">Descrição</label>
            <textarea name="Description" value={description}
            placeholder="Descrição"
            class="form-control" 
            onChange={(e) => setDescription(e?.target?.value)}
            ></textarea>
            </div>
             <button onClick={() => {
                localStorage?.setItem('@cadastrar_e_criar_cursos/courseName', courseName); 
                localStorage?.setItem('@cadastrar_e_criar_cursos/initialDate', initialDate);
                localStorage?.setItem('@cadastrar_e_criar_cursos/endDate', endDate);
                localStorage?.setItem('@cadastrar_e_criar_cursos/duration', duration);
                localStorage?.setItem('@cadastrar_e_criar_cursos/description', description);
            }}
            type="submit">Cadastrar</button>
        </div>
    );
}

export default Forms;
