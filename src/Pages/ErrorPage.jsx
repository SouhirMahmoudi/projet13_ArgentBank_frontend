import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

function ErrorPage() {

    return (

        <Errorpage>
        <ErroMain>
                <ErrorNumber>404</ErrorNumber>
                <ErrorMessage>Oups! La page que vous demandez n'existe pas.</ErrorMessage>
                <Link to="/">Retournez sur la page d'accueil</Link>
        </ErroMain >
        </Errorpage>
    );
}

const Errorpage = styled.div`

`
const ErroMain = styled.div`

`

const ErrorMessage = styled.p`

`

const ErrorNumber = styled.h1`

`


export default ErrorPage;