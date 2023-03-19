import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 25vh;
    height: 75vh;
    max-height: 75vh;
    width: 100vw;
    max-width: 100vw;
    display: flex;
    flex-direction: row;
    @media(max-width: 900px){
        flex-direction: column;
    }
`

export const ProjectsSection = styled.div`
    height: 75vh;
    max-height: 75vh;
    width: 70vw;
    max-width: 70vw;
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: scroll;
    border-right: rgb(252,204,4) 5px solid;
    box-sizing: border-box;
    @media(max-width: 900px){
        width: 100vw;
        max-width: 100vw;
        height: 35vh;
        max-height: 35vh;
        border-right: none;
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
        width: 70vw;
        max-width: 70vw;
        height: 75vh;
        max-height: 75vh;
    }
    @media(max-width: 900px){
        img{
            width: 100vw;
            max-width: 100vw;
            height: 35vh;
            max-height: 35vh;
        }
    }
`

export const ContactSection = styled.div`
    height: 75vh;
    max-height: 75vh;
    width: 30vw;
    max-width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media(max-width: 900px){
        width: 100vw;
        max-width: 100vw;
        height: 30vh;
        max-height: 30vh;
    }
`

export const ContactInfo = styled(ContactSection)`
    h1{
        all: unset;
        color: white;
        font-size: 3vw;
        width: 30vw;
        max-width: 30vw;    
        height: 10vh;
        max-height: 10vh;
        position: absolute;
        top: 10px;
    }
    form{
        position: absolute;
        top: 10vh;
        width: 30vw;
        max-width: 30vw;
        height: 65vh;
        max-height: 65vh;
    }
    form>div:nth-child(1){
        width: 30vw;
        max-width: 30vw;
        height: 10vh;
        max-height: 10vh;
        display: flex;
        flex-direction: column;
        margin: 1vh 0%;
    }
    form>div:nth-child(1)>label{
        width: 7.5vw;
        max-width: 7.5vw;
        color: white;
        font-size: 1.5vw;
    }
    form>div:nth-child(1)>input{
        height: 5vh;
        max-height: 5vh;
        width: 27.5vw;
        max-width: 27.5vw;
        margin: 0px 1vw;
        border-top-left-radius: 5vw;
        border-bottom-left-radius: 5vw;
        border-top-right-radius: 5vw;
        border-bottom-right-radius: 5vw;
    }
    form>div:nth-child(2){
        width: 30vw;
        max-width: 30vw;
        height: 10vh;
        max-height: 10vh;
        display: flex;
        flex-direction: column;
        margin: 1vh 0%;
    }
    form>div:nth-child(2)>label{
        width: 6vw;
        max-width: 6vw;
        color: white;
        font-size: 1.5vw;
    }
    form>div:nth-child(2)>input{
        height: 5vh;
        max-height: 5vh;
        width: 27.5vw;
        max-width: 27.5vw;
        margin: 0px 1vw;
        border-top-left-radius: 5vw;
        border-bottom-left-radius: 5vw;
        border-top-right-radius: 5vw;
        border-bottom-right-radius: 5vw;
    }
    form>div:nth-child(3){
        width: 30vw;
        max-width: 30vw;
        height: 25vh;
        max-height: 25vh;
        display: flex;
        flex-direction: column;
        margin: 1vh 0%;
    }
    form>div:nth-child(3)>label{
        width: 8vw;
        max-width: 8vw;
        color: white;
        font-size: 1.5vw;
    }
    form>div:nth-child(3)>textarea{
        height: 25vh;
        max-height: 25vh;
        width: 27.5vw;
        max-width: 27.5vw;
        margin: 0px 1vw;
        border-top-left-radius: 1vw;
        border-bottom-left-radius: 1vw;
        border-top-right-radius: 1vw;
        border-bottom-right-radius: 1vw;
    }
    form>input{
        width: 10vw;
        max-width: 10vw;
        height: 7vh;
        max-height: 7vh;
        margin: 4vh 0%;
        font-family: 'Open Sans', sans-serif; 
        background-color: transparent;
        border: rgb(252,204,4) 5px solid;
        color: rgb(252, 204, 4);
        border-top-left-radius: 5vw;
        border-bottom-left-radius: 5vw;
        border-top-right-radius: 5vw;
        border-bottom-right-radius: 5vw;
        font-size: 1.5vw;
        cursor: pointer;
    }
    @media(max-width: 900px){
        form{
            top: 42vh;
            width: 100vw;
            max-width: 100vw;
        }
        h1{
            top: 37vh;
            margin-bottom: 2vh;
            width: 100vw;
            max-width: 100vw;
            font-size: 5vw;
        }
        form>div:nth-child(1)>input{
            width: 90vw;
            max-width: 90vw;
        }
        form>div:nth-child(2)>input{
            width: 90vw;
            max-width: 90vw;
        }
        form>div:nth-child(3)>textarea{
            width: 90vw;
            max-width: 90vw;
        }
        form>div:nth-child(1)>label{
            padding: 0 2vw;
            font-size: 4vw;
        }
        form>div:nth-child(2)>label{
            padding: 0 2vw;
            font-size: 4vw;
        }
        form>div:nth-child(3)>label{
            padding: 0 2vw;
            font-size: 4vw;
        }
    }
    /*ul{
        all: unset;
        width: 30vw;
        max-width: 30vw;
        height: 10vh;
        max-height: 10vh;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }*/
`