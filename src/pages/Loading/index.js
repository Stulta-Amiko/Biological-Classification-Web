import { Container,Spinnner } from "components";
import { useState,useEffect } from "react";
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
    useEffect(()=>{
        const id = setTimeout(()=>{
            setTitle((title)=>title+".");
        },700);
        return () => clearTimeout(id);
    },[title]);
    return(
        <Container>
            <Title>{title}</Title>
            <Spinnner></Spinnner>
        </Container>
    )
}

export default Loading;