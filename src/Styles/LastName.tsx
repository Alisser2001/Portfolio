import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 100vw;
    height: 25vh;
    border-bottom: rgb(252,204,4) 3px solid;
`
export const LastNameContainer = styled(Container)`
    h1{
        all: unset;
        display: flex;
        align-items: center;
        font-size: 100px;
        height: 160px;
        padding: 0px 100px;
        color: white;
        border-left: rgb(252,204,4) 3px solid;
        font-weight: 600;
    }
`