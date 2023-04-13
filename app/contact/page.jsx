'use client';
import React, { useState } from "react";
import styles from "./contact.module.css";
import { useForm } from "react-hook-form";
import emailJS from "../services/email";
import { Toaster, toast } from 'sonner'

export default function Contact({ }) {
    const { register, handleSubmit } = useForm();
    const {stateEmail, setStateEmail} = useState(0);
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
            <Toaster position="bottom-right" expand={false} richColors/>
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