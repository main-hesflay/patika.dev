import { useState, useEffect } from "react";

import './styles.css'

// components;
import List from './List';
import Form from './Form';

function Contacts() {

    // kayıtların ekleneceği state burada gösterdik.
    const [contacts, setContacts] = useState([]);


    // contacts atama yapıldıgında son güncel halini görmeye çalışıyoruz
    useEffect(() => {
        console.log(contacts);
    }, [contacts]);


    return (
        <div id="container">
            <h1>Contacts</h1>
            <Form addContact={setContacts} contacts={contacts} />
            <List contacts={contacts} />
        </div>
    )
}

export default Contacts;