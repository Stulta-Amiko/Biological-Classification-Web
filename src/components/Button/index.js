import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledButton = styled.button`{
    font-size: ${(props)=>(props.fontSize === "big" ? "32px" : "16px" )};
    color: #FFFFFF;
    background-color: ${(props)=>props.theme.primaryColor100};
    border-radius: 30px;
    border: 0px;
    height: 120px;
    padding: 4px;
    margin: 4px;
    cursor: pointer;
    width: 120px;
    outline: none;
    font-weight: 700;
    &:hover {
        background-color: ${(props)=>props.theme.primaryColor80};
    }
}`;

const StyledLink = styled(Link)`
    width: 100%;
`

const Button = ({to,onClick,children}) =>
    to ?(
        <StyledLink to={to}>
            <StyledButton onClick={onClick} fontSize = "small">{children}</StyledButton>
        </StyledLink>
    ):(
        <StyledButton onClick={onClick} fontSize = "small">{children}</StyledButton>
    );

export default Button;