import React,{useState} from "react";
import {Container,Answer,Question} from "components";
import { useNavigate } from "react-router-dom";

const Quiz = ({setVal}) =>{
    let history = useNavigate();
    const [currentNo,setCurrentNo] = useState(0);
    const handleClick = (value) =>{
            if(value === "2"){
                setCurrentNo((currentNo)=>currentNo+1);
            }else if(value === "7"){
                setCurrentNo((currentNo)=>currentNo+3);
            }else if(value === "Unioninae"){
                setVal("Unioninae");
                history("/loading");
            }else if(value === "AmbleMinae"){
                setCurrentNo((currentNo)=>currentNo+2);
            }else if(value === "Coreana"){
                setVal("Coreana");
                history("/loading");
            }else if(value === "Leai"){
                setVal("Leai");
                history("/loading");
            }else if(value === "Hyriopsinae"){
                setVal("Hyriopsinae");
                history("/loading");
            }else if(value === "Anodontinae"){
                setCurrentNo((currentNo)=>currentNo+1);
            }else if(value === "5"){
                setCurrentNo((currentNo)=>currentNo+1);
            }else if(value === "Arcaeformis"){
                setVal("Arcaeformis");
                history("/loading");
            }else if(value === "Arcaeformis_flavotincta"){
                setVal("Arcaeformis_flavotincta");
                history("/loading");
            }else if(value === "5N"){
                setCurrentNo((currentNo)=>currentNo+2);
            }else if(value === "Woodina"){
                setVal("Woodina");
                history("/loading");
            }else if(value === "Unde"){
                setVal("Unde");
                history("/loading");
            }
    };
    return(
        <Container>
            <Question currentNo = {currentNo}/>
            <Answer currentNo={currentNo} handleclick={handleClick}/>
        </Container>
    );
};

export default Quiz;