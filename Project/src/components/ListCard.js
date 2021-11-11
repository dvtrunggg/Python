import React from 'react'
import card_product from './data/data_products'
import './Cards.css'

function ListCard() {
    const list_card = card_product.map((item) =>
            <div className="card_p" key={item.id}>
                <div className="card__img">
                    <img src={item.path} aria-hidden alt=''/>
                </div>
                <div className='card__header'>
                    <h2>{item.product_name}</h2>
                    <p>{item.description}</p>
                    <p className='price'>{item.price}<span>{item.currency}</span></p>
                    <div className='btn'>Add to cart</div>
                </div>
            </div>
        )
    return (
        <div className="main_content">
            <h3>Veganimal</h3>
            {list_card}
        </div>
    )
}

export default ListCard
