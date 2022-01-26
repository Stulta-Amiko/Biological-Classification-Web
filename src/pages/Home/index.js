import {Container,Button} from "components";
import coverImg from "Assets/Image/start.jpg";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 8px;
    text-align: center;
    color: ${(props) => props.theme.primaryColor100};
`;

const SubTitle = styled.h1`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 24px;
    text-align: center;
    color: ${(props) => props.theme.gray80};
`;

const StyledImage = styled.img`
    border-radius: 16px;
    opacity: 80%;
    margin-bottom: 16px;
    max-width: 100%;
    display: block;
`;

const Text = styled.p`
text-align: center;s
    font-size: 16px;
    margin-bottom: 24px;
`;

const Cent = styled.div`
    display: grid;
    place-content: center;
`

const Home = () =>(
    <Container>
        <Title>메인페이지 테스트</Title>
        <SubTitle>부제목란</SubTitle>
        <StyledImage src={coverImg} alt="cover"></StyledImage>
        <Text>
            설명란 테스트
        </Text>
        <Cent>
            <Button to="/quiz" styled={{textDecoration: 'none'}}>시작버튼</Button>
        </Cent>
    </Container>
);

export default Home;