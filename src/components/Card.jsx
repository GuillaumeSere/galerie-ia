import React from 'react'
import data from './data/Data'

const Card = () => {
    return (
        <div className="card-container">
            {data.map(({ id, image, title }) => {
                return (
                    <div className='card' key={id}>
                        <div className="card-img">
                            <img src={image} alt="illustartion" />
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Card
