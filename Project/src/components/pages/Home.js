import React, {Component} from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Fotter'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import Carousel from './Carousel'
import Content from './Content'
// import ListCard from '../ListCard'

class Home extends Component {

    componentDidMount(){
        console.log(this.props.my_list_cart)
    }
    
    render(){
        if(!this.props.search){
            return(
                <>
                    <HeroSection />
                    <Cards list_product = {this.props.list_product} handle_detail = {this.props.handle_detail}
                    handle_clear = {this.props.handle_clear}/>
                    <Carousel />
                    <Content />
                    <Footer />
                </>
            )
        }
        else{
            return <Redirect to={'/search?key=' + this.props.search}/>
        }
    }
}


Home.propTypes = {
    list_product: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    handle_detail: PropTypes.func.isRequired,
    handle_clear: PropTypes.func.isRequired,
    my_list_cart: PropTypes.array.isRequired,
}

export default Home;