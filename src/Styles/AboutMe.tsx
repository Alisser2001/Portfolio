import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 75vh;
    top: 25vh;
    max-height: 100vh;
    align-items: center;
    border-bottom: rgb(252,204,4) 5px solid;
    position: absolute;
    box-sizing: border-box;
`
export const Img = styled.img`
    width: 30vw;
    max-width: 30vw;
    height: 60vh;
    max-height: 60vh;
    padding: 0px 5vw;
    border-radius: 50%;
`

export const Info = styled.p`
    width: 70vw;
    max-width: 70vw;
    height: 60vh;
    max-height: 60vh;
    padding: 0px 5vw;
    border-left: rgb(252,204,4) 5px solid;
    font-family: 'Open Sans', sans-serif; 
    color: white;
    font-size: 1.8vw;
`