import React,{useState} from 'react';
import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyle from 'globalStyle';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {Loading,Quiz,Result,Home} from 'pages';
import {Helmet} from 'react-helmet';
import favicon from 'Assets/Image/favicon.ico';

function App() {
    const [val,setVal] = useState("");
    return(
        <ThemeProvider theme={theme}>
            <Helmet>
                <title>민물조개 테스트</title>
                <link rel="icon" href={favicon} />
            </Helmet>
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
