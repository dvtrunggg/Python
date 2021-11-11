import React, {Component} from 'react'
import './CardDetail.css'
import PropTypes from 'prop-types'
import Footer from '../Fotter'
import {Redirect} from 'react-router-dom'


class CardDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            product:[],
            amount: 0,
        }
        this.handle_amount = this.handle_amount.bind(this)
    }
    handle_change = e =>{
        const name = e.target.name
        const value = e.target.value
        this.setState(prevstate => {
            const newState = { ...prevstate }
            newState[name] = value;
            return newState
        });
    }
    componentDidMount(){
        console.log("Card detail")
        console.log(this.props.product_detail)
        console.log("Number")
        console.log(this.state.amount)
    }
    handle_amount = (data, product) => {
        if(data < 1)
        {
            alert("Can't not add product when number is 0")
        }
        if(data > 0)
        {
            this.props.handle_amount(data, product)
        }
        
    }
    render(){
    if(!this.props.search)
    {
        if(this.props.product_detail.price)
        {
            return (
                <>
                <div className="product-details">
                <div className = 'details'> 
                <div className='big-img'>
                    <img src={this.props.product_detail.path} alt="" />
                </div>
                <div className='box'>
                    <div className='row'>
                        <h2>{this.props.product_detail.product_name}</h2>
                        <span>{this.props.product_detail.price}{this.props.product_detail.currency}</span>
                        
                    </div>
                    <span>Number:{this.props.product_detail.count}</span> <br/>
                    <span>Type: {this.props.product_detail.type_product}</span>
                    <p>Vegetarian food has health benefits and enhances resistance</p>
                    <label><input type='number' name='amount' value={this.state.amount}
                        onChange={this.handle_change}/> The number of products</label>
                    <br/>
                    <button className='cart' onClick = {()=> this.handle_amount(this.state.amount, this.props.product_detail)}>Add to cart</button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
            )
        }
        else{
            return <Redirect to='/'/>
        }
    }
    
    else{
        return <Redirect to={'/search?key=' + this.props.search}/>
    }
}
}

CardDetail.propTypes = {
    product_detail: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    handle_clear : PropTypes.func.isRequired,
    handle_amount: PropTypes.func.isRequired,
}
export default CardDetail
