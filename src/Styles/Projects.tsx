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
    animation: slideProjects 0.5s backwards;
    @media(max-width: 900px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .buttons {
            display: flex;
            width: 100vw;
            max-width: 100vw;
            height: 10vh;
            max-height: 10vh;
            flex-direction: row;
            justify-content: space-around;
        }
        .buttons>button{
            font-size: 10vw;
        }
    }
    @keyframes slideProjects{
    from{
        top: 100vh;
    }
    to{
        top: 25vh;
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
    width: 76vw;
    max-width: 76vw;
    margin: 0;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    box-sizing: border-box;
    @media(max-width: 900px){
        width: 100vw;
        max-width: 100vw;
        height: 45vh;
        max-height: 45vh;
        margin: 0;
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
        width: 76vw;
        max-width: 76vw;
        height: 75vh;
        max-height: 75vh;
    }
    div>img{
        width: 72vw;
        max-width: 72vw;
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
        width: 65vw;
        max-width: 65vw;
        height: 25vh;
        max-height: 25vh;
        color: white;
        margin-top: 5vh;
        font-size: 1.3vw;
    }
    div>.containerInfo>h3{
        width: 45vw;
        max-width: 45vw;
        height: auto;
        max-height: auto;
        color: white;
        margin: 0;
        font-size: 2vw;
    }
    div>.containerInfo>a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10vw;
        max-width: 10vw;
        height: 5vh;
        max-height: 5vh;
        text-decoration: none;
        font-size: 1.5vw;
        margin: 0;
        border: rgb(252, 204, 4) 3px solid;
        border-top-left-radius: 5vw;
        border-bottom-left-radius: 5vw;
        border-top-right-radius: 5vw;
        border-bottom-right-radius: 5vw;
        color: white;
        font-weight: 700;
        position: relative;
        text-align: center;
    }
    div:hover img{
        opacity: 0.2;
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
            height: 45vh;
            max-height: 45vh;
        }
        div>img{
            display: flex;
            width: 100vw;
            max-width: 100vw;
            height: 45vh;
            max-height: 45vh;
        }
        div>.containerInfo{
            top: 10vh;
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
            margin-top: 1vh;
            font-size: 2vw;
        }
        div>.containerInfo>h3{
            width: 80vw;
            max-width: 80vw;
            height: 5vh;
            max-height: 5vh;
            color: white;
            font-size: 2.5vw;
        }
        div>.containerInfo>a{
            width: 80vw;
            max-width: 80vw;
            height: 5vh;
            max-height: 5vh;
            font-size: 3vw;
            margin-top: 5vh;
        }
    }
    @media(max-width: 600px){
        div>.containerInfo>p{
            font-size: 3vw;
        }
    }
`
