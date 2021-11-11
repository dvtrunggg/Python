import React, {Component} from 'react'
import './List_Cart.css'
import PropTypes from 'prop-types'
import Footer from '../Fotter'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'


class LIST_CART extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
        this.list_cart = []
        for(var i = 0; i < this.props.product_cart.list_cart.length; i++)
        {
            this.list_cart.push(this.props.product_cart.list_cart[i])
            this.list_cart[i]['number_cart'] = this.props.product_cart.number_cart[i]
            this.list_cart[i]['index'] = i
        }
        this.handle_add = this.handle_add.bind(this)
        this.handle_remove = this.handle_remove.bind(this)
        this.handle_clear_cart = this.handle_clear_cart.bind(this)
        this.handle_buy_cart = this.handle_buy_cart.bind(this)
    }
    componentDidMount(){
        console.log("Cart----")
        console.log(this.props.product_cart)
        console.log(this.list_cart)
    
    }
    handle_add = (index) => {
        this.props.handle_add(index)
    }
    handle_remove = (index) => {
        this.props.handle_remove(index)
    }
    handle_clear_cart = () =>{
        this.props.handle_clear_cart()
    }
    handle_buy_cart = (username, data) => {
        if(username)
        {
            var data_json = {
                "username": username,
                "list_cart": data
            }
            this.props.handle_buy_cart(data_json)
        }
        else{
            alert("You have sign in to buy cart")
        }
        
    }
    render(){
        if(!this.props.search)
        {
            if(this.list_cart.length)
            {
                return(
                    <>
                    <div className="Cart">
                        <h2>My Card</h2>
                        <ul class="list-group container">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <div>Product Name</div>
                                <div>Number</div>
                                <div>Total</div>
                                <div>Add</div>
                                <div>Remove</div>
                            </li>
                            {this.list_cart.map(item => {
                                return(
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <div>{item.product_name}</div>
                                        <span className="badge badge-primary badge-pill">{item.number_cart}</span>
                                        <span className="badge badge-primary badge-pill">{item.number_cart*item.price}$</span>
                                        <button onClick  = {()=> this.handle_add(item.index)} className='add'>+</button>
                                        <button onClick = {()=> this.handle_remove(item.index)} className= 'remove'>-</button>
                                    </li>
                                )
                                
                            })}
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <button onClick = {()=> this.handle_buy_cart(this.props.username, this.list_cart)} className = 'buy-cart'>
                                Buy cart</button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <button onClick={()=> this.handle_clear_cart()} className='clear-cart'>Clear cart</button>
                            </li>
                            
                        </ul>
                    </div>
                    <Footer />
                    </>
                    )
            }
            else{
                return(
                    <>
                    <div className="Cart">
                        <h2>My Card</h2>
                        <ul class="list-group container">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <div>Product Name</div>
                                <div>Number</div>
                                <div>Total</div>
                                <div>Add</div>
                                <div>Remove</div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <div>My Card is empty</div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <button className="Home"><Link to='/'className='go-to'>Go to Home</Link> </button>
                            </li>
                            
                        </ul>
                    </div>
                    <Footer />
                    </>
                    )
            }
            
        }
        else{
            return <Redirect to={'/search?key=' + this.props.search}/>
        }
        
    }
}
LIST_CART.propTypes = {
    product_cart: PropTypes.object.isRequired,
    handle_add: PropTypes.func.isRequired,
    handle_remove: PropTypes.func.isRequired,
    handle_clear_cart: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    handle_buy_cart: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
}

export default LIST_CART
