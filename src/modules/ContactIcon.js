import React from "react";
import contacts from '../content/contact.json';
import './ContactIcon.scss';

export default function ContactIcon({contact}) {

    const onIconClicked = () => {
        window.open(contacts[contact])
    }

    return(
        <img className="contact-icon" src={`assets/links/${contact}.png`} onClick={onIconClicked}></img>
    )
}