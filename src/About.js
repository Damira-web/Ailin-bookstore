import { useState } from 'react';
import { data1 } from './data1';

function About() {
    const [about, setAbout] = useState(data1);

    const [showText, setShowText] = useState(false);

    const showTextClick = (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)
    }

    return(<div>
        {about.map((item => {
            const {id, image, description1, description2, description3, description4, description5, quote, showMore} = item;
        
        return(<div className='container' key={id}>
            <div className='about-card'>
                <img src={image} width="700px" height="500px" alt="book store"/>
                <h2>{quote}</h2>
            </div>
            <div className='about-info'>
                <h3>{description1}</h3>
                <h3>{description2}</h3>
                <h3>{description3}</h3>
                <h3>{description4}</h3>
                <h3>
                    {showMore ? description5 : description5.substring(0,55) + '...'}
                    <button className='show-button' onClick={() => showTextClick(item)}>{showMore ? 'Show less' : 'Show more'}</button>
                </h3>
            </div>
        </div>
        )
        }))}
    </div>
    )
}

export default About;

