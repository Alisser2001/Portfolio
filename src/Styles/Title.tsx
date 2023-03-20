import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: initial;
    width: 100vw;
    height: 25vh;
    border-bottom: rgb(252,204,4) 5px solid;
    position: absolute;
    top: 25vh;
    box-sizing: border-box;
`
export const TitleContainer = styled(Container)`
    h1{
        all: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 8vw;
        height: 25vh;
        color: white;
        width: 86.8vw;
        box-sizing: border-box;
        font-weight: 600;
    }
    @media(max-width: 900px){
        h1{
            font-size: 8vw;
            padding: 0px 50px;
            width: 60vw;
            max-width: 60vw;
        }
    }
    @media(max-width: 600px){
        h1{
            font-size: 9vw;
            padding: 0px 50px;
            width: 60vw;
            max-width: 60vw;
        }
    }
    a{
        width: 13vw;
        max-width: 13vw;
        border-left: rgb(252,204,4) 5px solid;
        background-image: url("https://cdn-icons-png.flaticon.com/512/9946/9946475.png");
        background-size: 10vw 20vh;
        background-repeat: no-repeat;
        background-position: center;
    }
    @media(max-width: 900px){
        a{
            width: 40vw;
            max-width: 40vw;
            display: flex;
            justify-content: center;
            background-size: 25vw 15vh;
            box-sizing: border-box;
        }
    }
    @media(max-width: 600px){
        a{
            width: 40vw;
            max-width: 40vw;
            box-sizing: border-box;
        }
    }
`