import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 100vw;
    max-width: 100vw;
    height: 75vh;
    max-height: 75vh;
    top: 25vh;
    border-bottom: rgb(252,204,4) 5px solid;
    @media(max-width: 900px){
        flex-direction: column;
    }
`

export const NetworkSection = styled.div`
    height: 75vh;
    max-height: 75vh;
    width: 50vw;
    max-width: 50vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media(max-width: 900px){
        width: 100vw;
        max-width: 100vw;
        height: 10vh;
        max-height: 10vh;
        top: 51vh;
    }
`
export const NetworkInfo = styled(NetworkSection)`
    a{
        width: 25vw;
        max-width: 25vw;
        height: 38vh;
        max-height: 38vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }
    a:nth-child(1){
        //background-image: url("https://cdn-icons-png.flaticon.com/512/2111/2111432.png");
        border-left: rgb(252,204,4) 5px solid;
        border-bottom: rgb(252,204,4) 5px solid;
        box-sizing: border-box;
    }
    a > img {
        width: 10vw;
        max-width: 10vw;
        height: 20vh;
        max-height: 20vh;
        cursor: pointer;
    }
    a>p{
        all: unset;
        width: 25vw;
        max-width: 25vw;
        height: 2vh;
        max-height: 2vh;
        color: white;
        font-size: 2vw;
        margin: 2vh 0 0 0;
    }
    a>img:hover{
        transform: scale(0.9);
    }
    a:nth-child(2){
        //background-image: url("https://cdn-icons-png.flaticon.com/512/3669/3669739.png");
        border-bottom: rgb(252,204,4) 5px solid;
        border-left: rgb(252,204,4) 5px solid;
        box-sizing: border-box;
    }
    a:nth-child(3){
        //background-image: url("https://cdn-icons-png.flaticon.com/512/3670/3670274.png");
        border-left: rgb(252,204,4) 5px solid;
        box-sizing: border-box;
    }
    a:nth-child(4){
        //background-image: url("https://cdn-icons-png.flaticon.com/512/1384/1384017.png");
        border-left: rgb(252,204,4) 5px solid;
        box-sizing: border-box;
    }
    @media(max-width: 900px){
        a{
            width: 25vw;
            max-width: 25vw;
            height: 10vh;
            max-height: 10vh;
            border-top:rgb(252,204,4) 5px solid;
        }
        a>img{
            width: 10vw;
            max-width: 10vw;
            height: 8vh;
            max-height: 8vh;
        }
        a:nth-child(1){
            border-left: none;
            border-bottom: none;
            border-right:rgb(252,204,4) 5px solid;
        }
        a:nth-child(2){
            border-bottom: none;
            border-left: none;
            border-right:rgb(252,204,4) 5px solid;
        }
        a:nth-child(3){
            border-left: none;
            border-right:rgb(252,204,4) 5px solid;
        }
        a:nth-child(4){
            border-left: none;
        }
    }
`

export const ContactSection = styled.div`
    height: 75vh;
    max-height: 75vh;
    width: 50vw;
    max-width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media(max-width: 900px){
        width: 100vw;
        max-width: 100vw;
        height: 65vh;
        max-height: 65vh;
    }
`

export const ContactInfo = styled(ContactSection)`
    h1{
        all: unset;
        color: white;
        font-size: 3vw;
        width: 40vw;
        max-width: 40vw;    
        height: 10vh;
        max-height: 10vh;
        position: absolute;
        top: 20px;
    }
    form{
        position: absolute;
        top: 10vh;
        width: 40vw;
        max-width: 40vw;
        height: 65vh;
        max-height: 65vh;
        top: 80px;
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
        width: 7vw;
        max-width: 7vw;
        color: white;
        font-size: 1.5vw;
        margin: 0px 2vw;
    }
    form>div:nth-child(1)>input{
        height: 5vh;
        max-height: 5vh;
        width: 36vw;
        max-width: 36vw;
        margin: 0px 2vw;
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
        width: 5vw;
        max-width: 5vw;
        color: white;
        font-size: 1.5vw;
        margin: 0px 2vw;
    }
    form>div:nth-child(2)>input{
        height: 5vh;
        max-height: 5vh;
        width: 36vw;
        max-width: 36vw;
        margin: 0px 2vw;
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
        width: 7vw;
        max-width: 7vw;
        color: white;
        font-size: 1.5vw;
        margin: 0px 2vw;
    }
    form>div:nth-child(3)>textarea{
        height: 25vh;
        max-height: 25vh;
        width: 36vw;
        max-width: 36vw;
        margin: 0px 2vw;
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
        margin: 2vh 0%;
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
    form>input:hover{
        color: white;
        transform: scale(1.1);
    }
    @media(max-width: 900px){
        form{
            width: 100vw;
            max-width: 100vw;
            height: 55vh;
            max-height: 55vh;
        }
        h1{
            margin-bottom: 2vh;
            width: 100vw;
            max-width: 100vw;
            font-size: 5vw;
        }
        form>div:nth-child(1)>input{
            width: 90vw;
            max-width: 90vw;
            margin: 0px 5vw;
        }
        form>div:nth-child(2)>input{
            width: 90vw;
            max-width: 90vw;
            margin: 0px 5vw;
        }
        form>div:nth-child(3)>textarea{
            width: 90vw;
            max-width: 90vw;
            margin: 0px 5vw;
            height: 20vh;
            max-height: 20vh;
        }
        form>div:nth-child(1)>label{
            padding: 0 5vw;
            font-size: 4vw;
        }
        form>div:nth-child(2)>label{
            padding: 0 5vw;
            font-size: 4vw;
        }
        form>div:nth-child(3)>label{
            padding: 0 5vw;
            font-size: 4vw;
        }
        form>input{
        width: 20vw;
        max-width: 20vw;
        height: 5vh;
        max-height: 5vh;
        margin: 0;
        font-size: 3vw;
        cursor: pointer;
    }
    form>input:hover{
        color: white;
        transform: scale(1.1);
    }
    }
    ul{
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
    }
`