'use client';
import React, { useState } from "react";
import styles from "./contact.module.css";
import { useForm } from "react-hook-form";
import emailJS from "../services/email";
import { Toaster, toast } from 'sonner'

export default function Contact({ }) {
    const { register, handleSubmit } = useForm();
    const { stateEmail, setStateEmail } = useState(0);
    const submitNewMessage = (data) => {
        let responseStatus, responseText;
        emailJS(data).then(function (response) {
            toast.success("El Email fue enviado con exito")
        }, function (error) {
            setStateEmail(error.status);
            toast.error("Algo salió mal, intentalo de nuevo")
        });
    }
    return (
        <div className={styles.container}>
            <Toaster position="bottom-right" expand={false} richColors />
            <div className={styles.contactInfo}>
                <h1 className={styles.title}>Contáctame</h1>
                <form onSubmit={handleSubmit(submitNewMessage)} className={styles.formContact}>
                    <div className={styles.formName}>
                        <label>Nombre</label>
                        <input type="text" {...register("user_name")} required={true} />
                    </div>
                    <div className={styles.formEmail}>
                        <label>Gmail</label>
                        <input type="email" {...register("user_email")} required={true} />
                    </div>
                    <div className={styles.formMessage}>
                        <label>Mensaje</label>
                        <textarea {...register("message")} required={true} />
                    </div>
                    <input type="submit" className={styles.submit} />
                </form>
            </div>
            <ul className={styles.networkInfo}>
                <li className={styles.link}>
                    <a href="https://github.com/Alisser2001" target="_blank">
                        <img src="/github.png" />
                    </a>
                    <p>GitHub</p>
                </li>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/alisser2001" target="_blank">
                        <img src="/linkedin.png" />
                    </a>
                    <p>LinkedIn</p>
                </li>
                <li className={styles.link}>
                    <a href="https://twitter.com/JuanEstivenCar2" target="_blank">
                        <img src="/twitter.png" />
                    </a>
                    <p>Twitter</p>
                </li>
                <li className={styles.link}>
                    <a href="https://www.instagram.com/alisser2001" target="_blank">
                        <img src="/instagram.png" />
                    </a>
                    <p>Instagram</p>
                </li>
            </ul>
        </div>
    )
}