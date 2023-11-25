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
        emailJS(data).then(function (response) {
            toast.success("Email was sent successfully")
        }, function (error) {
            setStateEmail(error.status);
            toast.error("Something went wrong, try again")
        });
    }
    return (
        <div className={styles.container}>
            <Toaster position="bottom-right" expand={false} richColors />
            <div className={styles.contactInfo}>
                <h1 className={styles.title}>Contact me</h1>
                <form onSubmit={handleSubmit(submitNewMessage)} className={styles.formContact}>
                    <div className={styles.formName}>
                        <label>Name</label>
                        <input type="text" {...register("user_name")} required={true} />
                    </div>
                    <div className={styles.formEmail}>
                        <label>Email</label>
                        <input type="email" {...register("user_email")} required={true} />
                    </div>
                    <div className={styles.formMessage}>
                        <label>Message</label>
                        <textarea {...register("message")} required={true} />
                    </div>
                    <input type="submit" className={styles.submit} value="Submit"/>
                </form>
            </div>
            <ul className={styles.networkInfo}>
                <li className={styles.link}>
                    <a href="https://github.com/Alisser2001" target="_blank">
                        <img src="/github.png" />
                        <p>GitHub</p>
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/alisser2001" target="_blank">
                        <img src="/linkedin.png" />
                        <p>LinkedIn</p>
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://twitter.com/JuanEstivenCar2" target="_blank">
                        <img src="/twitter.png" />
                        <p>Twitter</p>
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.instagram.com/alisser2001" target="_blank">
                        <img src="/instagram.png" />
                        <p>Instagram</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}