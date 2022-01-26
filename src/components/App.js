import React,{useState} from 'react';
import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyle from 'globalStyle';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {Loading,Quiz,Result,Home} from 'pages';

function App() {
    const [val,setVal] = useState("");
    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/quiz" element={<Quiz setVal={setVal}/>}/>
                    <Route path="/loading" element={<Loading val={val}/>}/>
                    <Route path="/result/:val" element={<Result val={val} setVal={setVal}/>}/>
                </Routes>
            </Router>
                
        </ThemeProvider>
    );
};

export default App;
