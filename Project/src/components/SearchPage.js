import React,{Component} from 'react'
import Cards from './Cards'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'
// import {orderBy as OrderBy, filter} from 'lodash'

class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            not_null:true,
            // list_product:OrderBy(this.props.list_search,[this.props.orderBy],[this.props.orderDir]),
            type_product: this.props.type_product,
            list_product_sort: this.props.list_product_sort_filter,
            
        }
        // if(this.props.type_product.length > 0){
        //     this.setState({list_product:filter(this.state.list_product,['type_product',this.props.type_product])})
        // }
        // this.list_type = filter(this.state.list_product,['type_product',this.props.type_product])
        // this.handle_sort = this.handle_sort.bind(this)
        // this.handle_type = this.handle_type.bind(this)
    }
    
    componentDidMount(){
        console.log(this.props.list_search)
        console.log("ProductSort-API")
        console.log(this.props.url_search)
    }
    handle_sort = (orderBy, orderDir) => {
        console.log(orderDir)
        this.props.handle_sort(orderBy, orderDir);

    }
    handle_type = (value) => {
        this.props.handle_type(value)
    }
    render()
    {   if(this.props.orderDir === '' && this.props.type_product === '')
        {
            return (
                <>
                <div Style='display: flex; with:40%'>
                <Dropdown>
                    <Dropdown.Toggle Style='margin-left : 30%;  cursor: pointer;' variant="primary" id="dropdown-basic">
                    Sort  
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item role = 'button' onClick={()=>this.handle_sort('price','asc')}>Low</Dropdown.Item>
                      <Dropdown.Item role = 'button' onClick={()=>this.handle_sort('price','desc')}>Hight</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle Style='margin-left: 50%' variant="success" id="dropdown-basic">
                    Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item role = 'button' onClick={()=>this.handle_type('fruit')}>Fruit</Dropdown.Item>
                      <Dropdown.Item role = 'button'onClick={()=>this.handle_type('vegetables')}>Vegetables</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                
                {/* {this.state.list_product_sort.length?<Cards list_product={this.state.list_product_sort} handle_detail={this.props.handle_detail} 
                handle_clear = {this.props.handle_clear}/>: 
                <Cards list_product={this.props.list_search} handle_detail={this.props.handle_detail} handle_clear = {this.props.handle_clear}/>} */}
                {this.props.list_search.length?<Cards list_product={this.props.list_search} handle_detail={this.props.handle_detail} handle_clear = {this.props.handle_clear}/>:<h3 Style='text-align:center; 
                margin-top:10%;'>No matching results were found</h3>}
                {/* <h3 Style='text-align:center; 
                margin-top:10%;'>No matching results were found</h3> */}
                {this.props.url_search?<Redirect to={'/search?key=' + this.props.search + '&' + this.props.url_search}/>
                :<Redirect to={'/search?key=' + this.props.search}/>}
                
                </>
                )
        }
        else{
            return (
                <>
                <div Style='display: flex; with:40%'>
                <Dropdown>
                    <Dropdown.Toggle Style='margin-left : 30%;  cursor: pointer;' variant="primary" id="dropdown-basic">
                    Sort  
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item role = 'button' onClick={()=>this.handle_sort('price','asc')}>Low</Dropdown.Item>
                      <Dropdown.Item role = 'button' onClick={()=>this.handle_sort('price','desc')}>Hight</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle Style='margin-left: 50%' variant="success" id="dropdown-basic">
                    Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item role = 'button' onClick={()=>this.handle_type('fruit')}>Fruit</Dropdown.Item>
                      <Dropdown.Item role = 'button'onClick={()=>this.handle_type('vegetables')}>Vegetables</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                
                {this.state.list_product_sort.length?<Cards list_product={this.state.list_product_sort} handle_detail={this.props.handle_detail} 
                handle_clear = {this.props.handle_clear}/>: 
                <h3 Style='text-align:center;margin-top:10%;'>No matching results were found</h3>}
                {/* {this.props.list_search.length?<Cards list_product={this.props.list_search} handle_detail={this.props.handle_detail} handle_clear = {this.props.handle_clear}/>:<h3 Style='text-align:center; 
                margin-top:10%;'>No matching results were found</h3>} */}
                {/* <h3 Style='text-align:center; 
                margin-top:10%;'>No matching results were found</h3> */}
                {this.props.url_search?<Redirect to={'/search?key=' + this.props.search + '&' + this.props.url_search}/>
                :<Redirect to={'/search?key=' + this.props.search}/>}
                </>
                )
        }
        
    }

    
}

export default SearchPage
SearchPage.propTypes = {
    // list_product: PropTypes.array.isRequired,
    list_search: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    handle_sort: PropTypes.func.isRequired,
    orderDir: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    handle_type: PropTypes.func.isRequired,
    type_product: PropTypes.string.isRequired,
    handle_detail: PropTypes.func.isRequired,
    product_detail: PropTypes.array.isRequired,
    handle_clear: PropTypes.func.isRequired,
    list_product_sort_filter: PropTypes.array.isRequired,
    url_search: PropTypes.string.isRequired,
}
