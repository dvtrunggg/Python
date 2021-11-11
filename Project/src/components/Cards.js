import React, {Component} from 'react'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CardItem from './CardItem'
import './Cards.css'
import PropTypes from 'prop-types'





class Cards extends Component{
   state = {
        list_card: [],
        temp: [],
        my_data: this.props.list_product,
        not_only: true
   };
    componentDidMount(){
        console.log(this.props.list_product)
        if(this.props.list_product.length === 1)
        {
            this.setState({not_only:false})
        }
        this.setState({list_card : this.state.my_data.map((item, index) =>
                        
            <CardItem product={item} handle_detail={this.props.handle_detail} handle_clear = {this.props.handle_clear}/>
        )}) 
    }
    
    render(){
    return (
        
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className='cards__wrapper'>
                    
                    {/* {list_card} */}
            
                     <ul className='cards__items'>
                        {this.state.list_card}
                    </ul>
                    {/* <ul className='cards__items'>
                        <CardItem src='images/food_1.jpg' text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure' path='/products'/>
                        <CardItem src='images/food_2.jpg' text='Travel through the Islands of Bali in a Private Cruise'
                        label='Luxury' path='/products'/>
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src='images/food_3.jpg' text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'path='/products'/>
                        <CardItem src='images/food_4.jpg' text='Experience Football on Top of the Himilayan Mountains' 
                        label='Adventure' path='/products' />
                        <CardItem src='images/food_5.jpg' text='Ride through the Sahara Desert on a guided camel tour'
                        label='Adrenaline' path='/products'/>
                    </ul> */}
                </div>
            </div>
            
        </div>
        
    )
}
}

Cards.propTypes = {
    list_product: PropTypes.array.isRequired,
    handle_detail: PropTypes.func.isRequired,
    handle_clear : PropTypes.func.isRequired,
}

export default Cards
