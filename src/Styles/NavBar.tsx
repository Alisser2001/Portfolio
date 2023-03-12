import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 25vh;
    justify-content: initial;
    color: white;
    background-color: #161616;
    margin: 0;
    border-bottom: rgb(252,204,4) 3px solid;
`
export const Title = styled.h1`
    all: unset;
    display: flex;
    align-items: center;
    font-size: 100px;
    height: 160px;
    padding: 0px 300px 0px 50px;
    color: white;
    width: 55%;
    font-weight: 600;
`

export const Options = styled.ul`
    all: unset;
    display: flex;
    flex-direction: row;
    width: 45%;
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
        border-left: rgb(252,204,4) 3px solid;
    }
    li:nth-child(3){
        border-right: rgb(252,204,4) 3px solid;
    }
`
export const AnchorList = styled(OptionsList)`
    a{
        width: 100%;
        display: flex;
        height: 25vh;
        max-width: 100%;
        background-size: 60% 50%;
        background-repeat: no-repeat;
        background-position: center;
    }
    .anchor1 {
        background-image: url("https://cdn-icons-png.flaticon.com/512/9980/9980489.png");
    }
    .anchor2 {
        background-image: url("https://cdn-icons-png.flaticon.com/512/9980/9980435.png");
    }
    .anchor3 {
        background-image: url("https://cdn-icons-png.flaticon.com/512/9980/9980463.png");
    }
`