import React from 'react';
import Forms from '../../Components/Forms';
import Logo from '../../Logo/allylogo.svg';

const Container = () => {
    
    return(
        <div>
            <img src={Logo} alt="Logo da Ally" height={50} width={120} />
            <Forms/>
        </div>
    );
}

export default Container;
