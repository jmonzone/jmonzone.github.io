import React from "react";
import './Contact.scss';
import contacts from '../content/contact.json'
import ContactIcon from "./ContactIcon";

export default function Contact() {
    return(
        <div className="contact">
            {Object.keys(contacts).map(contact => <ContactIcon key={contact} contact={contact}/>)}
        </div>
    )
}