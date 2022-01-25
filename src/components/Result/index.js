import React from "react";
import styled from "styled-components";
import testImg from "Assets/Image/testing.jpg";

const ResultTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 56px;
    text-align: center;
`

const SectionTitle = styled.h1`
	font-size: 64px;
	font-weight: bold;
	margin-top: 0px;
	margin-bottom: 56px;
	text-align: center;
`;

const StyledImage = styled.img`
	border-radius: 16px;
	opacity: 80%;
	margin-bottom: 16px;
	max-width: 100%;
	display: block;
`;

const Result = ({cCode}) =>(
    <>
    <SectionTitle>결과페이지 테스트</SectionTitle>
    <StyledImage src={testImg}/>
    <ResultTitle>결과값 테스트</ResultTitle>
    </>
);

export default Result;