import styled from "styled-components";
import { BiologySelection } from "constants";
import Button from "../Button";

const AnswerGroupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
`;

const Answer = ({currentNo,handleclick})=>(
    <AnswerGroupWrapper>
        {
        BiologySelection[currentNo].answers.map((answer) =>(
            <Button onClick = {()=> handleclick(answer.value)}>
                    {answer.text}
            </Button>
        ))}
    </AnswerGroupWrapper>
);

export default Answer;