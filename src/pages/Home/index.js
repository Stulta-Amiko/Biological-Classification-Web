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
        <Title>민물조개 찾기 테스트</Title>
        <SubTitle>당신이 오늘본 민물조개는 무슨 조개일까요?</SubTitle>
        <StyledImage src={coverImg} alt="cover"></StyledImage>
        <Text>
            당신이 오늘 본 민물조개에 대해서 알아보는 시간을 가지도록 합시다.
        </Text>
        <Cent>
            <Button to="/quiz" styled={{textDecoration: 'none'}}>시작</Button>
        </Cent>
    </Container>
);

export default Home;