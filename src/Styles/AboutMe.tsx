import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    align-items: center;
    top: 100vh;
    border-bottom: rgb(252,204,4) 5px solid;
    position: absolute;
    box-sizing: border-box;
`
export const Img = styled.img`
    width: 40vw;
    max-width: 40vw;
    height: 90vh;
    max-height: 90vh;
    padding: 0px 5vw;
    border-radius: 50%;
`

export const Info = styled.p`
    width: 40vw;
    max-width: 40vw;
    height: 90vh;
    max-height: 90vh;
    padding: 0px 5vw;
    border-left: rgb(252,204,4) 5px solid;
    font-family: 'Open Sans', sans-serif; 
    color: white;
    font-size: 1.813vw;
`