import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, {Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
//import { Button } from 'react-bootstrap'
import {Button, Cart, Account} from './Button'
import './Navbar.css'
import PropTypes from 'prop-types'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Dropdown} from 'react-bootstrap'



console.log("Navbar")


class Navbar extends Component{
 
    
    constructor(props)
    {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.container = React.createRef();
        this.state = {click: false, button: true, open:false}
     
    }
    handleClick = () => {
        this.setState({click: !this.state.click})

    }
    closeMobileMenu = () => {
        this.setState({click: false})
    }
    showButton = () => {
        if(window.innerWidth <= 960)
        {
            this.setState({button: false})
        }
        else{
            this.setState({button: true})
        }
    }

    handleButtonClick=()=>{
        this.setState(state => {
            return {
                open: !state.open
            }
        })
    }


    handle_logout = () => {
        localStorage.removeItem('token');
        console.log(this.props.logged_in)
        this.setState({ logged_in: false, username: '' });
        console.log(this.props.logged_in)
        Redirect('/')
    };
 
    log_in = (

        <li className="nav-item">
            <Link to='/cart' className='nav-links-mobile' onClick={this.closeMobileMenu}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>{this.props.amount}-{this.props.total}$
            </Link>
            <Link to='/sign-in' className='nav-links-mobile' onClick={this.closeMobileMenu}>
            Sign in
            </Link>
            
        </li>
     
    )
    log_out = (
        <li className="nav-item">
            <div className='nav-links-mobile'>
            <Link to='/cart' className='nav-links-mobile' onClick={this.closeMobileMenu}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>{this.props.amount}-{this.props.total}$
            </Link>
            <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                    {this.props.username}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Infor</Dropdown.Item>
                      <Dropdown.Item><Link to='/cart' style={{color: 'black', textDecoration: 'none'}}>My card</Link></Dropdown.Item>
                      <Dropdown.Item ><Link to='/purchase' style={{color: 'black', textDecoration: 'none'}}>Purchase history</Link></Dropdown.Item>
                      <Dropdown.Item href='/sign-in' onClick={this.props.handle_logout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
            </div>
        </li>
    )
    

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            open: false,
          });
        }
    };
    componentWillMount(){
        this.showButton()
    }
    componentDidMount(){
        window.addEventListener('resize', this.showButton);
        document.addEventListener("mousedown", this.handleClickOutside);
        console.log(this.props.amount)
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.showButton);
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    render(){
    return (
        <>
            <nav className="navbar" ref={this.container}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={this.closeMobileMenu && this.props.handle_clear}>
                    VEGANIMAL <i className="fab fa-typo3"></i>
                        
                    </Link>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={this.closeMobileMenu && this.props.handle_clear}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className='nav-links' onClick={this.closeMobileMenu && this.props.handle_clear}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className='nav-links' onClick={this.closeMobileMenu && this.props.handle_clear}>
                                Products
                            </Link>
                        </li>
                       
                        {this.props.logged_in ? this.log_out : this.log_in}
                        
                    </ul>
                   
                    {this.props.logged_in?this.state.button && <Account buttonStyle='btn--outline' 
                    ><Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                    {this.props.username}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Infor</Dropdown.Item>
                      <Dropdown.Item ><Link to='/cart' style={{color: 'black', textDecoration: 'none'}}>My card</Link></Dropdown.Item>
                      <Dropdown.Item ><Link to='/purchase' style={{color: 'black', textDecoration: 'none'}}>Purchase history</Link></Dropdown.Item>
                      <Dropdown.Item href='/sign-in' onClick={this.props.handle_logout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown></Account>:
                    this.state.button && <Button buttonStyle='btn--outline' onClick={this.props.handle_clear}>SIGN-IN</Button>
                    }
                    {this.state.button && <Cart onClick={this.props.handle_clear} buttonStyle='btn--outline' to = "/cart">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>{this.props.amount}-{this.props.total}$
                    </Cart>
                    }
                    {/* {this.props.logged_in ? this.button_logout : this.button_login} */}

                </div>
                {/* <input type='search' placeholder='search'></input> */}
            </nav>
            
        </>
    )
}

}
Navbar.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    handle_logout: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    handle_clear: PropTypes.func.isRequired,
    handle_clear_sort: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired
}

export default Navbar

