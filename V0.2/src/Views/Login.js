import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
`;

const LayerLogin = styled.div`
    width: 50%;
    height: 100%:
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoginTitle = styled.h1`
    font-size: 3.4rem;
    font-family: 'Sacramento', cursive;
`;

const Login = () => {
    return (
        <Container>
            <LayerLogin>
            </LayerLogin>
            <LayerLogin>
                <LoginTitle> Hello There !</LoginTitle>
            </LayerLogin>
        </Container>
    )
};

export default Login;