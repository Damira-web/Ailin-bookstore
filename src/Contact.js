import { useState } from 'react';
import { data3 } from './data3';

function Contact() {

    const [contact, setContact] = useState(data3);

    return(<div>
        {contact.map((element => {
            const{map, find, contact, whatsapp, phone, email, follow, socialMedia} = element;

            return(<div className='cont'>
                <div className='contact-map'>
                <h2>{find}</h2>
                    <img src={map} width="600px" alt="map"/>
                </div>

                <div className='contact-info'>
                    <h2>{contact}</h2>
                    <p>whatsapp: {whatsapp}</p>
                    <p>phone: {phone}</p>
                    <p>e-mail: {email}</p>
                    <h2>{follow}</h2>
                    <img src={socialMedia} width="300px" alt="social"/>
                </div>
            </div>

            )
        }))}
    </div>
    )
}

export default Contact;