import React from 'react'
import data2 from './data2/Data2'

const Card2 = () => {
    return (
        <div className="card-container2">
            {data2.sort(() => Math.random() - 0.5).map(({ id, image, title }) => {
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

export default Card2
