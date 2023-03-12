import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
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
        align-items: center;
        font-size: 8vw;
        height: 25vh;
        padding: 0px 50px;
        margin-right: 200px;
        color: white;
        border-left: rgb(252,204,4) 5px solid;
        border-right: rgb(252,204,4) 5px solid;
        box-sizing: border-box;
        font-weight: 600;
    }
    @media(max-width: 900px){
        h1{
            font-size: 5vw;
            padding: 0px 50px;
        }
    }
    @media(max-width: 600px){
        h1{
            font-size: 7vw;
            padding: 0px 50px;
            margin-right: 40px;
        }
    }
`