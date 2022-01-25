import { Container,Spinner } from "components";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
font-size: 64px;
font-weight: bold;
margin: 8px;
margin-bottom: 96px;
text-align: center;
`

const Loading = ({convertedScore}) =>{
    const [title,setTitle] = useState("분석중");
    let history = useNavigate();

    useEffect(()=>{
        const id = setTimeout(()=>{
            setTitle((title)=>title+".");
        },700);
        return () => clearTimeout(id);
    },[title]);
    useEffect(()=>{
        setTimeout(()=>{
            history(`/result`);
        },2200);
    },[history]);
    return(
        <Container>
            <Title>{title}</Title>
            <Spinner></Spinner>
        </Container>
    )
}

export default Loading;