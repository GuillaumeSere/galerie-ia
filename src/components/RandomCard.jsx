import React, { useState } from 'react'
import Card2 from './Card2'
import data from './data/Data'

const RandomCard = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className="card-container">
                {data.sort(() => Math.random() - 0.5).map(({ id, image }) => {
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
            <Card2 />
        </>
    )
}

export default RandomCard
