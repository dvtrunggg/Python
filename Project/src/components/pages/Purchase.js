import React, {Component} from 'react'
import './Purchase.css'
import PropTypes from 'prop-types'
import Footer from '../Fotter'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'

class Purchase extends Component{

    componentDidMount(){
        console.log("Purchase")
        console.log(this.props.my_list_cart)
    }

    render(){
        if(!this.props.search)
        {
            if(this.props.my_list_cart.length)
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
                            </li>
                            {this.props.my_list_cart.map(item => {
                                return(
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <div>{item.product_name}</div>
                                        <span className="badge badge-primary badge-pill">{item.number_cart}</span>
                                        <span className="badge badge-primary badge-pill">{item.number_cart*item.price}$</span>
                                    </li>
                                )
                                
                            })}
                        
                            
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
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <div>Purchase history is empty</div>
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

Purchase.propTypes = {
    search: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    my_list_cart: PropTypes.array.isRequired,
}

export default Purchase