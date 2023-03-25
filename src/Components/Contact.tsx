import React from "react";
import { Container, NetworkInfo } from "../Styles/Contact";
import { ContactInfo } from "../Styles/Contact";
import { FieldValues, useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

export const Contact: React.FC = ({ }) => {
    const width = window.innerWidth;
    const { register, handleSubmit } = useForm();
    const submitNewMessage = (data: FieldValues) => {
        let dataForm = document.createElement("form");
        let inputName = document.createElement("input");
        inputName.type = "text";
        inputName.value = data.user_name;
        inputName.name = "from_name";
        dataForm.appendChild(inputName);
        let inputGmail = document.createElement("input");
        inputGmail.type = "text";
        inputGmail.value = data.user_email;
        inputGmail.name = "from_email";
        dataForm.appendChild(inputGmail);
        let inputMessage = document.createElement("input");
        inputMessage.type = "text";
        inputMessage.value = data.message;
        inputMessage.name = "message";
        dataForm.appendChild(inputMessage);
        emailjs.sendForm('service_fpvbdzi', 'template_irt4vgw', dataForm, '-a-oLVjAcP6i062lJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <Container>
            <ContactInfo>
                <h1>Contactame</h1>
                <form onSubmit={handleSubmit(submitNewMessage)}>
                    <div>
                        <label>Nombre</label>
                        <input type="text" {...register("user_name")} required={true} />
                    </div>
                    <div>
                        <label>Gmail</label>
                        <input type="text" {...register("user_email")} required={true} />
                    </div>
                    <div>
                        <label>Mensaje</label>
                        <textarea {...register("message")} required={true} />
                    </div>
                    <input type="submit" />
                </form>
                <ul>
                    <li><a href="" /></li>
                    <li><a href="" /></li>
                    <li><a href="" /></li>
                </ul>
            </ContactInfo>
            <NetworkInfo>
                <a href="https://github.com/Alisser2001">
                    <img src="/icons/github.png" />
                    {width>900 && <p>GitHub</p>}
                </a>
                <a href="https://www.linkedin.com/in/alisser2001">
                    <img src="/icons/linkedin.png"/>
                    {width>900 && <p>LinkedIn</p>}
                </a>
                <a href="https://twitter.com/JuanEstivenCar2">
                    <img src="/icons/twitter.png" />
                    {width>900 && <p>Twitter</p>}
                </a>
                <a href="https://www.instagram.com/alisser2001">
                    <img src="/icons/instagram.png" />
                    {width>900 && <p>Instagram</p>}
                </a>
            </NetworkInfo>
        </Container>
    )
}