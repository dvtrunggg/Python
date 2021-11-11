import React,{Component} from 'react'
import './Search.css'
import PropTypes from 'prop-types'


class Search extends Component {
    state = {
        search: ''
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
    handle_clear_search = ()=>{
        this.setState({search:''})
    }

    render(){
        return (
        
            <form className='nav-search' onSubmit={e => this.props.handle_search(e, this.state)}>
                <input className='search' name='search' value={this.state.search} onChange={this.handle_change} placeholder='  Search...' type='text'></input>
                <button type='submit' className='button_search search_'onClick={this.props.handle_clear_type}>Search</button>
                <button type='button' className='button_search clear_' onClick={this.handle_clear_search}>Clear</button>
            </form>
        )
    }
    
}

export default Search;
Search.propTypes = {
    handle_search: PropTypes.func.isRequired,
    handle_clear_type:PropTypes.func.isRequired,
};


