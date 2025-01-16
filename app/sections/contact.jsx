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
        <section ref={refAbout} className={`pt-28 mb-16 flex flex-col w-full px-10 lg:px-0 lg:pr-48 lg:w-5/6 justify-center items-start text-white opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} style={{animationDelay: ".2"}} id='contact'>
            <Index/>
            <Form/>
        </section>
    )
}