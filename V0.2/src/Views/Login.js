import React, { useRef, useState } from 'react';
import { isEmpty } from 'lodash';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import loginImage from '../assets/login.png';

const Container = styled.section`
    width: 100%;
    height: 100%;
    position: relative;
`;

const LoginImage = styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${loginImage});
    background-size: cover;
    background-repeat: no-repeat;
`;

const LoginForm = styled.form`
    width: 35%;
    height: 70%;
    position: absolute;
    right: 10%;
    top: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoginTitle = styled.h2`
    font-size: 4.9rem;
    text-align: center;
    padding-top: 20px;
`;

const TitleLine = styled.hr`
    width: 15%;
    border: 2px solid #facbcb;
    margin-bottom: 130px;
`;

const LoginInput = styled.input`
    all: unset;
    width: 80%;
    height: 10%;
    border-bottom: 2.5px solid #e0d2d2;
    &:last-child {
        padding-top: 100px;
    };
    font-size: 1.8rem;
    color: #c9bbbb;
    &::placeholder {
        color : #c9bbbb;
    };
`;

const FindPassword = styled.p`
    width: 80%;
    font-size: 1.4rem;
    margin: 10px auto;
    color: #eeb6b6;
    align-self: flex-start;
`;

const LoginButton = styled.button`
    all: unset;
    width: 150px;
    height: 40px;
    background-color: #facbcb;
    color: white;
    border-radius: 20px;
    text-align: center;
    line-height: 35px;
    font-size: 2.2rem;
    margin-top: 50px;
`;

const Login = () => {
    const [checkUser, setCheckUser] = useState(false);
    const history = useHistory();
    const userid = useRef(null);
    const userPassword = useRef(null);

    const onSubmit = evt => {
        evt.preventDefault();
        if (isEmpty(userid.current.value)) {
            userid.current.value = "";
            userid.current.focus();
            alert("아이디를 입력해주세요!");
            return ;
        }
        if (isEmpty(userPassword.current.value)) {
            userPassword.current.value = "";
            userPassword.current.focus();
            alert("비밀번호를 입력해주세요!");
            return ;
        } else {
            setCheckUser(true);
        }
        if (checkUser) {
            alert("로그인을 하셨습니다.");
            history.push("/");
        }
    }

    return (
        <Container>
            <LoginImage />
            <LoginForm onSubmit={onSubmit}>
                <LoginTitle> Login </LoginTitle>
                <TitleLine />
                <LoginInput type="text" placeholder="Username" ref={userid} />
                <LoginInput type="password" placeholder="Password" ref={userPassword} />
                <FindPassword> Forgot Password? </FindPassword>
                <LoginButton type="submit"> LOGIN </LoginButton>
            </LoginForm>
        </Container>
    )
};

export default Login;