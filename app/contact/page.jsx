'use client';
import React from "react";
import styles from "./contact.module.css";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

export default function Contact({ }) {
    const { register, handleSubmit } = useForm();
    const submitNewMessage = (data) => {
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
        <div className={styles.container}>
            <div className={styles.contactInfo}>
                <h1 className={styles.title}>Contáctame</h1>
                <form onSubmit={handleSubmit(submitNewMessage)} className={styles.formContact}>
                    <div className={styles.formName}>
                        <label>Nombre</label>
                        <input type="text" {...register("user_name")} required={true} />
                    </div>
                    <div className={styles.formEmail}>
                        <label>Gmail</label>
                        <input type="text" {...register("user_email")} required={true} />
                    </div>
                    <div className={styles.formMessage}>
                        <label>Mensaje</label>
                        <textarea {...register("message")} required={true} />
                    </div>
                    <input type="submit" className={styles.submit} />
                </form>
            </div>
            <div className={styles.networkInfo}>
                <a href="https://github.com/Alisser2001" target="_blank" className={styles.link}>
                    <img src="/github.png" />
                    <p>GitHub</p>
                </a>
                <a href="https://www.linkedin.com/in/alisser2001" target="_blank" className={styles.link}>
                    <img src="/linkedin.png" />
                    <p>LinkedIn</p>
                </a>
                <a href="https://twitter.com/JuanEstivenCar2" target="_blank" className={styles.link}>
                    <img src="/twitter.png" />
                    <p>Twitter</p>
                </a>
                <a href="https://www.instagram.com/alisser2001" target="_blank" className={styles.link}>
                    <img src="/instagram.png" />
                    <p>Instagram</p>
                </a>
            </div>
        </div>
    )
}