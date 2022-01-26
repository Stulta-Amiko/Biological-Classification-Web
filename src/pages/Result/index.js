import { Container,Result,Button } from "components";
import styled from "styled-components";

const Cent = styled.div`
    display: grid;
    place-content: center;
`;

const ResultPage = ({setScore}) =>{
    return(
        <Container>
            <Result></Result>
            <Cent>
                <Button onClick={()=>setScore(0)} style={{textDecoration:'none'}} to="/">다시하기 버튼 임시</Button>
            </Cent>
        </Container>
    );
};

export default ResultPage;