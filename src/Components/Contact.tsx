import React from "react";
import { Container, NetworkInfo } from "../Styles/Contact";
import { ContactInfo } from "../Styles/Contact";

export const Contact: React.FC =({}) => {
    return(
        <Container>
            <ContactInfo>
                <h1>Contactame</h1>
                <form>
                    <div>
                        <label>Nombre</label>
                        <input />
                    </div>
                    <div>
                        <label>Gmail</label>
                        <input />
                    </div>
                    <div>
                        <label>Mensaje</label>
                        <textarea />
                    </div>
                    <input type="submit"/>
                </form>
                <ul>
                    <li><a href=""/></li>
                    <li><a href=""/></li>
                    <li><a href=""/></li>
                </ul>
            </ContactInfo>
            <NetworkInfo>
                <a/>
                <a/>
                <a/>
                <a/>
            </NetworkInfo>
        </Container>
    )
}