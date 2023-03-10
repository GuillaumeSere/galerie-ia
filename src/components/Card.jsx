import React, { useState } from 'react'
import data from './data/Data'

const Card = () => {

    const [show, setShow] = useState(false);

    return (
        <div className="card-container">
            {data.map(({ id, image }) => {
                     const handleShow = () => {
                        setShow(true);
                        window.open(image, '_blank');
                    };
                return (
                    <div className='card' key={id}>
                        <div className="card-img">
                            <img src={image} alt="illustartion" onClick={handleShow} />
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Card
