import { HashLoader } from "react-spinners";
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
`

const Spinner = () =>{
    const themeContext = useContext(ThemeContext);
    const color = themeContext.primaryColor100;
    return(
        <Flex>
            <HashLoader size="150px" color={color}/>
        </Flex>
    );
};

export default Spinner;