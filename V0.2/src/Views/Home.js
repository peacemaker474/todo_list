import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TodoDays from '../Components/TodoDays';

const MainHome = styled.main`
    width: 100%;
    height: 85%;
    background-color: #f4d799;
`;

const MainNav = styled.nav`
    width: 100%;
    height: 15%;
`;

const MainUl = styled.ul`
    width: 90%;
    height: 70%;
    margin: 0 auto;
    padding-top: 30px;
    border-bottom: 7px solid black;
    display: flex;
    justify-content: space-between;
`;

const NavList = styled.li`
    width: 10%;
    height: 100%;
    border: 2px solid black;
    border-radius: 10px 10px 0 0;
    background-color: #2F80ED;
    color: white;
    text-align: center;
`;

const MainTitle = styled.h1`
    font-size: 2.7rem;
    font-weight: bold;
    padding-top: 10px;
`;

const NLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 2.3rem;
    font-weight: bold;
    display: block;
    padding-top: 10px;
`;

const LayerTitle = styled.div`
    width: 90%;
    height: 20%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;

const ToDoTitle = styled.h2`
    font-size: 3.2rem;
    margin: 0 20px;
`;

const MainLine = styled.span`
    width: 39.7%;
    border: 2px solid black;
`;

const Home = () => {
    return (
        <>
            <MainNav>
                <MainUl>
                    <NavList>
                        <MainTitle> Weekly </MainTitle>
                    </NavList>
                    <NavList>
                        <NLink to="/login"> Login </NLink>
                    </NavList>
                </MainUl>
            </MainNav>
            <MainHome>
                <LayerTitle>
                    <MainLine />
                    <ToDoTitle> Weekly Schedule </ToDoTitle>
                    <MainLine />
                </LayerTitle>
                <TodoDays />
            </MainHome>
        </>
    )
};

export default Home;