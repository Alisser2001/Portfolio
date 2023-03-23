import styled from "styled-components";

export const GlobalStyles = styled.div`
    position: absolute;
    top: 25vh;
    height: 75vh;
    max-height: 75vh;
    width: 100vw;
    max-width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media(max-width: 900px){
        flex-direction: column;
    }
`
export const Container = styled(GlobalStyles)`
    button{
        width: 10vw;
        max-width: 10vw;
        height: 20vh;
        max-height: 20vh;
        margin: 0 2vw;
        font-size: 5vw;
        border-radius: 50%;
        background-color: transparent;
        color: rgb(252, 204, 4);
        border: none;
        cursor: pointer;
    }
    button:hover{
        transform: scale(1.5);
    }
    .button1{
        rotate: 90deg;
    }
    .button2{
        rotate: 270deg;
    }
`

export const ProjectsSection = styled.div`
    height: 75vh;
    max-height: 75vh;
    width: 74vw;
    max-width: 74vw;
    margin: 0;
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: scroll;
    box-sizing: border-box;
    @media(max-width: 900px){
        width: 100vw;
        max-width: 100vw;
        height: 65vh;
        max-height: 65vh;
        margin: 5vh 0;
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    ::-webkit-scrollbar {
        background-color: transparent;
    }
    
    ::-webkit-scrollbar:vertical {
        width: 1vw;
    }
    
    ::-webkit-scrollbar-track {
        background-color: #161616;
    }
    
    ::-webkit-scrollbar-button {
        display: none;
    }
    
    ::-webkit-scrollbar:horizontal {
        height: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: rgb(252, 204, 4);
        border-radius: 20px;
        border: 2px solid rgb(252, 204, 4);
        margin: 1vw;
    }
`

export const InfoProjects = styled(ProjectsSection)`
    img{
        width: 75vw;
        max-width: 75vw;
        height: 75vh;
        max-height: 75vh;
    }
    @media(max-width: 900px){
        img{
            width: 100vw;
            max-width: 100vw;
            height: 45vh;
            max-height: 45vh;
        }
    }
`
