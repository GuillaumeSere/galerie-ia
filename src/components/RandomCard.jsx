import React from 'react'
import data from './data/Data'

const RandomCard = () => {
    return (
        <div className="card-container">
            {data.sort(() => Math.random() - 0.5).map(({ id, image, title }) => {
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

export default RandomCard
