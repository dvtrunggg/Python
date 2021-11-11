import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class CardItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            product_detail:this.props.product
        }
        this.handle_detail = this.handle_detail.bind(this)
    }
    handle_detail = (data) => {
        this.props.handle_detail(data)
        this.props.handle_clear()
    }
    render(){
    return (
        <>
            <li className='cards__item' key={this.props.product.product_name}>
                <Link className='cards__item__link' to={'/product-detail?'+this.state.product_detail.product_name} 
                onClick={()=>this.handle_detail(this.state.product_detail)}>
                    <figure className='cards__item__pic-wrap' data-category={this.props.product.product_name}>
                        <img src={this.props.product.path} aria-hidden alt='Travel Image' className='cards__item__img'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{this.props.product.description}</h5>
                        <h5 className='cards__item__text'>Price: {this.props.product.price}{this.props.product.currency}</h5>
                        <h5 className='cards__item__text'>Number:{this.props.product.count}</h5>
                        <button to={'/product-detail?'+this.state.product_detail.product_name} 
                        onClick={this.props.handle_clear} className="button-details">See detail</button>
                    </div>
                </Link>
            </li>   
        </>
    )
    }
}

CardItem.propTypes = {
    handle_detail: PropTypes.func.isRequired,
    product: PropTypes.array.isRequired,
    handle_clear : PropTypes.func.isRequired,
}
export default CardItem;
