import React from "react";
import styled from "styled-components";
import { BiologySelection } from "constants";

const QuestionWrapper = styled.div`
    margin-bottom: 16px;
`

const PageLabel = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 8px;
    margin-left: 50px;
`
const QuestionTitle = styled.div`
    font-size: 30px;
    margin-bottom: 8px;
    margin-left: 50px;
`

const Question = ({currentNo}) =>(
    <QuestionWrapper>
        <PageLabel>
            <span>{BiologySelection[currentNo].id}</span>/{BiologySelection.length}
        </PageLabel>
        <QuestionTitle>{BiologySelection[currentNo].question}</QuestionTitle>
    </QuestionWrapper>
);

export default Question;