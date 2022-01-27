import React from "react";
import styled from "styled-components";
import RESULT from "./result";

const ResultTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 36px;
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
	margin-bottom: 4px;
	max-width: 100%;
	display: block;
`;
const Content = styled.div`
    font-size: 16px;
    margin-bottom: 4px;
    text-align: center;
`
const Source = styled.div`
    font-size: 16px;
    margin-bottom: 36px;
    color: #848484;
`

const Result = ({val}) =>(
    <>
    <SectionTitle>당신이 찾는것이?</SectionTitle>
    <StyledImage src={RESULT[val].src}/>
    <Source>위 사진은 본문과 관계없습니다.</Source>
    <ResultTitle>{RESULT[val].title}</ResultTitle>
	<Content>{RESULT[val].explanation}</Content>
    <Source>{RESULT[val].source}</Source>
    </>
);

export default Result;