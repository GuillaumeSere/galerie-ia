import React, { useState } from 'react'
import data2 from './data2/Data2'

const Card2 = () => {

    const [show, setShow] = useState(false);

    return (
        <div className="card-container2">
            {data2.sort(() => Math.random() - 0.5).map(({ id, image }) => {
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

export default Card2
