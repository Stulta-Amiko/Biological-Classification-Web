import React,{useState} from "react";
import { BiologySelection } from "constants";
import {Container,Answer,Question} from "components";
import { useNavigate } from "react-router-dom";

const Quiz = ({setScore}) =>{
    //let history = useNavigate();
    const [currentNo,setCurrentNo] = useState(0);
    const handleClick = (isCorrect) =>{
        if(isCorrect){
            setScore((score)=>score+1);
        }
        if(currentNo === BiologySelection.length-1){
            //history("/loading");
        }else{
            setCurrentNo((currentNo)=>currentNo+1);
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