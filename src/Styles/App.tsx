import styled from "styled-components";

export const AppStyle = styled.div`
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif; 
    background-color: #161616;
    height: 100vh;
    max-height: 100vh;
    overflow-x: hidden;

    ::-webkit-scrollbar {
    background-color: transparent;
    }
    ::-webkit-scrollbar:vertical {
        width: 1vw;
    }
    ::-webkit-scrollbar-button:increment{
        
    }
    ::-webkit-scrollbar-button {
        display: none;
    }
    ::-webkit-scrollbar:horizontal {
        height: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgb(252,204,4);
        border-radius: 20px;
        border: 2px solid rgb(252,204,4);
        margin: 1vw;
    }
`