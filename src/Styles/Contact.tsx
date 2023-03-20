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
        height: 38vh;
        max-height: 38vh;
        position: absolute;
        top: 51vh;
    }
`
export const NetworkInfo = styled(NetworkSection)`
    a{
        width: 25vw;
        max-width: 25vw;
        height: 38vh;
        max-height: 38vh;
        background-size: 10vw 20vh;
        background-repeat: no-repeat;
        background-position: center;
    }
    a:nth-child(1){
        background-image: url("https://cdn-icons-png.flaticon.com/512/2111/2111432.png");
        //background-image: url("https://lh3.googleusercontent.com/65iMGumhi9G7-7fxP7MxpPS9tTCurGzYF8xEg2UpcUd0NonAhP8E0SGCqZJDp6UK6NPkWaymeO6SOmjnD4mjsnQxOxbZhkeS1T4CEClDhde_-mwguPpip29FDMi0BKBAjMbicxs3kpXNOMm9EEbKqvLQg3X2O7YfCtzaD5JOYXYFe8Akdr_V89AW1Xfpoq1DE58I-9PrCFPwo_qxwomyZIy5nsT7hpwtmXWY7TEm44oBVoNahU7D8gbxSvUdopTejPICMz40AJsIgnaVAHvTTAxfuTbyQmIrmrhSaQPp95G0Q2IV7mllkvtPaqc1TIq7HsWzKpffUZzRhi6Ch0m0y9lqWbCZyUsDtsCDe1DIJa7BcDyZGc6sSBNY1ZWMIwzhBUHCZZDnMC4irAIeMbTLFOpcRGXpxjxw7X5RauqdFyzk0ToSdllulh1sQRLyho8f5tyhXLMxk146yTLEg0tv9plLVDSIndaiK9_gRLJXp0_dX9mApNdj0za3bff39HD9o2IxW4NAiVQS5dWn41AqEnKtlZt3L_uhVdP43eCzwUUJLAQHXgCl4HQzB0e9fudr2bMKDCUkcYW9p5R6JhktJH7QiTQOLfBgUQVCOe8bOtiGmNdXVAFVMhxp3GT1JGj95ps-JrbgSBqMnEVVTEjKf3b5skoac6bGOS_6nnWDkP3BPJ_p5PzySBG-c3tRHTQF43yJvWrBLx3ERtcViSU9tKawQ-e2pYzgjzGSFwIaxyE-lK6CIVheZaJYgDdKqd2F7q4DDH_B3OX3F4fY-eXo7QsLBAhEnq5UomAYJJbCtDSBMrnSyWzrwhkiNE58Gjcv9b4EMlsCQ8qSKpBlvEDKYSnxv8GsB6MW7XDKg0CAdZ3yKmXCOnnmfQ-l1WJxi9XZwVJ1OaRQxPwOQvCgSeLRfwOVysxGjKIbG8GMUJZvunAHlV658K3DCq06q1O9Ai3nBvryYL4rpC0-ciqhI5E5wD7cEh18cLYTveMEUhSXXB5cnuVDe9ZsVW3G0rI=s512-no?authuser=0");
        border-left: rgb(252,204,4) 5px solid;
        border-bottom: rgb(252,204,4) 5px solid;
        box-sizing: border-box;
    }
    a:nth-child(2){
        background-image: url("https://cdn-icons-png.flaticon.com/512/3669/3669739.png");
        //background-image: url("https://lh3.googleusercontent.com/32BK9UUlkB0kBMltRWK2ch7JOyguWyGfV-pKgXYzHp9p65r7kPUk7F9T49rSLE11aeOcoo2uV-zxzXY5D8ID886oLzPwAUgcdt5GjP_60WcVmi2pLlvANhKga4RoywatVZOb1ZWm2oa2UtbAkatC16i_T2j4xh5NKGzEBQFUQAesEOVAzRZsTWlfEpTgNE2z664sqpSJ9G5peRUPn47VvrMjjeipGy3vWV-VZbbHAdTeIAQWs_3ndUe0LvVLnxukOAZHYFrSUV-mwkYIiCMeNB4wN9KNV5cNKdBq6pUu1is7-YbnXOD3H0enc7k1EQcrY6jBw0M1gbWo2SbswmeHkJV8LefT7tUMPaPbkTdlMuBQclemWO5Yl0cx7JKXwJXE7d7cPsRmUgrGfxGrsdbBCIRp8BjJ_JB_JXYOboXQ6dXQoOuH_CwW_tcd6UC4MPuEYDBMWhzHyE34VLJ0NY4PVQM8REBPk2CLDViZVz6LGJPsetxLqXlZ-8oZon-M6iW7p9qNKs1mCmDyC9J-5h5W0zSaHbVL53oHExlyHEJs1GukxyoQDx7cI_UbrPieYENNMVp6tV2pACg5exmaIcPmhvjC4ArfbxERv_a5PaRlNdgYtnXbjvCBtdleV5YwB_zpfg_877KP9WlY-cAAQiKG0IiJBgNYgmYPqRsITMTFnjGiWnwa0DxZpUhUzpbqfqRBoSJG8mCNR0W4kuxpR_uF_z3gMNDZdLDN_d09fwDCvIUiQodBhQLzGhZDc_G0o_vrM4CMvGaa3HJ9nOOSfhuHZMKT9T1CkrNVqBXiK5-GWU3-NNb3yQ_6k5ybVfehEi950ts_Dpu8AQXSBxCV29n3g9X46kDSOI05Uy4MtThyTuR5ijgAflfzDeO-B-Nc5SXCfGN9LkA_zW4jsSzo5nOmkns8eVez_ZdlKbOj7bVgtvfKHWfqhPHWqwEKlLHnnukJSfCm4HsyAKmOI0Ak9giV-oYtqmpg3FgDU4Xs8OaN2szUUmC1dgAeZ58HP2A=s512-no?authuser=0");
        border-bottom: rgb(252,204,4) 5px solid;
        border-left: rgb(252,204,4) 5px solid;
        box-sizing: border-box;
    }
    a:nth-child(3){
        background-image: url("https://cdn-icons-png.flaticon.com/512/3670/3670274.png");
        //background-image: url("https://lh3.googleusercontent.com/lj0I9jcFfLhunQxSBev8mYj0ue1XGXHWYDQexv3otuPjwHGJvxhRbv5pHPk0p2a4RgngbucXPJMOqR2HGQlBww7-7mw9F900j9b4YbPTmqQZiJwcX0wCS5Yn7AcZv9JSBZit7vBRVPBPU7XWQDOgqeE2tAwfmdrfEi_YGVEEd_pkZhFSxh_EY78rKLBhvs8Yvxc6mqg774p6__zMWV8idnFL0R2jiixZ3NHHqYCxiE_gY3mtBPtXyqFhWw_zofUb5HDdwP3PvlZwS3GZhaTn9o0vAESgCx0E3yzvQ8uLzToWVwBv5yUx9RXL7CpHOTIJbOVQnqDSjz8mRIUBhuMbrxAGhBNGhUIpXJCTfM-UusQ0Af-hnEjAzF7G3qUE2OW-EdR5euU48CyN-SPfYwpSwiLM7HZswmXfNs6YhhUaF-IvBP3CzxfDGu6OJkOU7gecNo3F2PpqSptFmE38NnZi8lXTcoIA6AXYRhEKHlRhFmXcMfsEakeIObRPTA0DX_TTGYCmEeLg1q9sj8N6vb2ib-YsCSvS1vZpsG5hRhlaJ3a2UyJL7RLXCizxS8XQz0ltOuf1-X5Sl9SjmhdaYBfkyJTu6h9bKUORG5nQJd3lfC3esMHTNHaoBDOMZGgemW70WtgDw--j6pwpuXgEO5Mg8FUYZaJwi1iou8GA48_HoOzJcpLhSjIdsJnooMha-3-OWwbt6i8JOElENeuJ8A_wRDqaVQ62aYS2UwO0GrIjMRbHH_n9fp4-e444iM7EbyW7-dFN5wYPCYNQzktTBMJs7EYdTK45ySAH40dzt2tSLqsxBoXvDuVD8G1YasdRzR51ECTR3oVGKBkFeThcH9psQ5YnTpb9pelJm2SazrjbMTXjZDQBdyi93S9lzBTKqp1YjcAQdEAtA6JY0f6E9PSmvlN8OA36a-uQ8i203KdwG1n4ZBWy4TLCSOt-fptcFlzPCCkbONMB5voFZW8va2rZXTGrgAJ4gqc182vtemAIRdxJxOWpsKHTDmaVl-E=s512-no?authuser=0");
        border-left: rgb(252,204,4) 5px solid;
        box-sizing: border-box;
    }
    a:nth-child(4){
        background-image: url("https://cdn-icons-png.flaticon.com/512/1384/1384017.png");
        //background-image: url("https://lh3.googleusercontent.com/9fYlVVNdYR93WvNBry-WdVZiot8o4BTWvr9ZHFVfxilOtnVxO6eqVoG0tQqBCYgcCZG01d0W8kAHRZGNhs4b7_Mmfwgcx4Lm-FIIT4aHeqpJ6qGIsao7S72q0E38APYApK_eCX3UNsgn_1EqUcZViP9362I98Q8vPV6SDN_R_wrfQ9w6ztK0Q9hr7jZxvtfdYEtoeTJtKMcvUiQMguJeU_hBoFnhfd1gIz8MELMmp_teBE4TKkaTyA0r_kxNv-qpZEw6_qE-teidt7Umm1vwEpR29goy_w63ykB-xEA6UHQ3Gp6Q-UtGiEmdSSdzEgPteBN5y8gR3PzRY_ZCMSyWd_RyzXlXCu10z2kY5jrYfUgLeL44a7sPceFh4T9ukB6QgmDv0ZhRhl8lJ7ga_U6R0TJCKeYvXY9ZZg6StQon9DNm4M8A1PhcWuB8yOaPgVl12sATBAlIxgStxQKt4vHW2z3iyIxJpBmznoMo9QHrTIM3KIyySNYEYR9k8S8lQY4YDs2H24ITuwb86Xq-GmKSxhU5hSU9mdX6SYFnlI39KFbiya8nYXCThPJrNGciTXs91fbtSBzFSSSc_ioSDWd1jbbB3Ad_YF-1TwO6CFHzZecqPORYZAZKyxOqnIjlPHBWMi834ayhZmuOF_I0BnDNSQxnQ9ZnnzdmFqezoW8lt0LNLujFAc4SkQaOhFopUbVqG5H3iN5oWZQpab8nwHgf8Xaqx5qCL8KERGl7sg6evGrgPguZtQefpHvyldMGL9hJjwSOb45r15JScdpKjt7v9BX2j9PTUIJjYkJHneoAIf7LCMRxN2ohE-wq3HZdemJKpUDqp9G4ZU-fOoMv8QGYSjq_rnOdvWSZTr6yJXUoGlOLhN7qmXMJ7Tk6XXAzxNWZ761La50r-A_z7q7-cTt4L6rm-Mqh268YBg9bq2DlbOYlaWLlpYXTjbM_HC__Nj2fntR_6gIYM_ePI1Dk308UlkQCz8xtfq2iZOk3XH0jao2Yk5ym9E99eXUO1rs=s512-no?authuser=0");
        border-left: rgb(252,204,4) 5px solid;
        box-sizing: border-box;
    }
    @media(max-width: 900px){
        a{
            width: 25vw;
            max-width: 25vw;
            height: 10vh;
            max-height: 10vh;
            background-size: 10vw 8vh;
            background-repeat: no-repeat;
            background-position: center;
            border-top:rgb(252,204,4) 5px solid;
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
        height: 38vh;
        max-height: 38vh;
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
    @media(max-width: 900px){
        form{
            width: 100vw;
            max-width: 100vw;
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