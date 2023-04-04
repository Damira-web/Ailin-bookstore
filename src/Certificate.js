import { useState } from 'react';
import { data2 } from './data2';

function Certificate() {

    const [certificate, setCertificate] = useState(0);
    const {id, name, image, description} = data2[certificate];

    const previousCertificate = () => {
        setCertificate((certificate => {
            certificate --;
            if (certificate <0) {
                return data2.length -1;
            }
            return certificate;
        }))
    }

    const nextCertificate = () => {
        setCertificate((certificate => {
            certificate ++;
            if(certificate>data2.length -1) {
                certificate = 0;
            }
            return certificate;
        }))
    }

    return(<div>
        <div className='cont'>
            <img className='certificate' src={image} width="500px" alt="certftcate"/>
        </div>

        <div className='cont'>
            <h2>$ {name}</h2>
        </div>

        <div className='cont'> 
            <h3>{description}</h3>
        </div>

        <div className='certificate-cont'>
            <button className='certificate-button' onClick={previousCertificate}>Previous</button>
            <button className='certificate-button' onClick={nextCertificate}>Next</button>
        </div>
    </div>
    )
}

export default Certificate;