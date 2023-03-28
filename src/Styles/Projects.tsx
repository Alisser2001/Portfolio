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
        .buttons{
            display: flex;
            width: 100vw;
            max-width: 100vw;
            flex-direction: row;
            justify-content: space-around;
        }
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
    overflow: hidden;
    box-sizing: border-box;
    @media(max-width: 900px){
        width: 100vw;
        max-width: 100vw;
        height: 65vh;
        max-height: 65vh;
        margin: 5vh 0;
        flex-direction: column;
    }
`

export const InfoProjects = styled(ProjectsSection)`
    div{
        all: unset;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 75vw;
        max-width: 75vw;
        height: 75vh;
        max-height: 75vh;
    }
    div>img{
        width: 75vw;
        max-width: 75vw;
        height: 75vh;
        max-height: 75vh;
        opacity: 1;
        display: block;
    }
    div>.containerInfo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 75vw;
        max-width: 75vw;
        height: 75vh;
        max-height: 75vh;
        text-align: center;
        position: absolute;
        opacity: 0;
    }
    div>.containerInfo>p{
        display: flex;
        width: 45vw;
        max-width: 45vw;
        height: 25vh;
        max-height: 25vh;
        color: white;
    }
    div>.containerInfo>h3{
        width: 45vw;
        max-width: 45vw;
        height: 5vh;
        max-height: 5vh;
        color: white;
    }
    div:hover img{
        opacity: 0.4;
    }
    div:hover .containerInfo{
        opacity: 1;
    }
    @media(max-width: 900px){
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100vw;
            max-width: 100vw;
            height: 75vh;
            max-height: 75vh;
        }
        div>img{
            display: flex;
            width: 100vw;
            max-width: 100vw;
            height: 45vh;
            max-height: 45vh;
        }
        div>.containerInfo{
            top: 0;
            width: 100vw;
            max-width: 100vw;
            height: 45vh;
            max-height: 45vh;
            font-size: 2.5vw;
        }
        div>.containerInfo>p{
            display: flex;
            width: 80vw;
            max-width: 80vw;
            height: 15vh;
            max-height: 15vh;
            color: white;
        }
        div>.containerInfo>h3{
            width: 80vw;
            max-width: 80vw;
            height: 5vh;
            max-height: 5vh;
            color: white;
        }
        div:hover img{
            opacity: 1;
        }
        div:hover .containerInfo{
            opacity: 0;
        }
        div:active img{
            opacity: 0.4;
        }
        div:active .containerInfo{
            opacity: 1;
        }
    }
`
