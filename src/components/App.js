import React,{useState} from 'react';
import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyle from 'globalStyle';
import { BiologySelection } from 'constants';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {Loading,Quiz,Result,Home} from 'pages';

function App() {
    const [score,setScore] = useState(0);
    const convertedScore = Math.floor((score/BiologySelection.length)*100);
    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/quiz" element={<Quiz setScore={setScore}/>}/>
                    <Route path="/loading" element={<Loading convertedScore={convertedScore}/>}/>
                    <Route path="/result" element={<Result setScore={setScore}/>}/>
                </Routes>
            </Router>
                
        </ThemeProvider>
    );
};

export default App;
