import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 25vh;
    justify-content: initial;
    color: white;
    background-color: #161616;
    margin: 0;
    border-bottom: rgb(252,204,4) 5px solid;
    position: absolute;
    box-sizing: border-box;
`
export const Title = styled.h1`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8vw;
    height: 25vh;
    padding: 0px;
    color: white;
    width: 60vw;
    font-weight: 600;
    @media(max-width: 900px){
        font-size: 8vw;
    }
    @media(max-width: 600px){
        font-size: 8vw;
    }
`

export const Options = styled.ul`
    all: unset;
    display: flex;
    flex-direction: row;
    width: 40vw;
    height: 25vh;
    justify-content: center;
    margin: 0;
    list-style: none;
`
export const OptionsList = styled(Options)`
    li{
        all: unset;
        width: 33%;
        height: 25vh;
        max-height: 25vh;
        max-width: 33%;
        justify-content: center;
        margin: 0px;
        border-left: rgb(252,204,4) 5px solid;
        box-sizing: border-box;
    }
    @media(max-width: 900px){
        li{
            width: 40vw;
            max-width: 40vw;
            display: flex;
            justify-content: center;
        }
    }
`
export const AnchorList = styled(OptionsList)`
    a{
        width: 100%;
        display: flex;
        height: 25vh;
        max-width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-decoration: none;
    }
    a>img{
        width: 10vw;
        max-width: 10vw;
        height: 20vh;
        max-height: 20vh;
    }
    a>p{
        width: 13vw;
        max-width: 13vw;
        height: 2vh;
        max-height: 2vh;
        color: white;
        margin: 1vh 0 0 0;
        font-size: 4vw;
    }
    a>img:hover{
        transform: scale(0.9);
    }
    @media(max-width: 900px){
        a{
            width: 40vw;
            justify-content: center;
        }
        a>img{
            width: 25vw;
            max-width: 25vw;
            height: 15vh;
            max-height: 15vh;
        }
    }
`