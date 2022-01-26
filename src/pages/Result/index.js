import { Container,Result,Button } from "components";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Cent = styled.div`
    display: grid;
    place-content: center;
`;

const ResultPage = ({setVal}) =>{
    const {val} = useParams();
    return(
        <Container>
            <Result val={val}></Result>
            <Cent>
                <Button onClick={()=>setVal("")} style={{textDecoration:'none'}} to="/">다시하기 버튼 임시</Button>
            </Cent>
        </Container>
    );
};

export default ResultPage;