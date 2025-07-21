'use client';
import React from "react";
import { useRef } from "react";
import {useIsVisible} from "../../hooks/useIsVisible";
import Index from "../components/contact/index";
import Form from "../components/contact/form";

export default function Contact() {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    return (
        <section ref={refAbout} className={`flex flex-col w-full min-h-screen text-white justify-center items-center opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} style={{animationDelay: ".2"}} id='contact'>
            <Index/>
            <Form/>
        </section>
    )
}