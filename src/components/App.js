import React,{useState} from 'react';
import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyle from 'globalStyle';
import { BiologySelection } from 'constants';
import { Router,Route,Routes } from 'react-router-dom';
import Quiz from 'pages/Quiz';

function App() {
    const [score,setScore] = useState(0);
    const convertedScore = Math.floor((score/BiologySelection.length)*100);
    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
                <Quiz setScore={setScore}/>
        </ThemeProvider>
    );
};

export default App;
